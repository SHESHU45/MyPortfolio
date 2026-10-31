import React, { Suspense, createRef, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, View, useTexture } from "@react-three/drei";

/*
 * On desktop: all tech balls are rendered into ONE shared WebGL canvas (via drei <View>).
 * On mobile (< 768px): we render sleek 3D-styled static icon badges so mobile GPUs
 * don't hit WebGL context/shader limits and scrolling stays 60fps.
 */

const Ball = ({ imgUrl, rotation }) => {
  const [decal] = useTexture([imgUrl]);
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += (rotation.x - mesh.current.rotation.x) * 0.15;
    mesh.current.rotation.y += (rotation.y - mesh.current.rotation.y) * 0.15;
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={mesh} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const ClearCanvas = () => {
  useFrame(({ gl }) => {
    gl.setScissorTest(false);
    gl.clear(true, true);
  }, 1);
  return null;
};

const useInView = (ref, rootMargin = "200px") => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
};

const dragHandlers = (rotation) => {
  let last = null;
  return {
    onPointerDown: (e) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      last = { x: e.clientX, y: e.clientY };
    },
    onPointerMove: (e) => {
      if (!last) return;
      rotation.y += (e.clientX - last.x) * 0.01;
      rotation.x += (e.clientY - last.y) * 0.01;
      last = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: () => (last = null),
    onPointerCancel: () => (last = null),
  };
};

const BallGrid = ({ items }) => {
  const containerRef = useRef();
  const isMobile = useIsMobile();
  const inView = useInView(containerRef);

  const slots = useMemo(
    () =>
      items.map((item) => {
        const rotation = { x: 0, y: 0 };
        return {
          ...item,
          rotation,
          track: createRef(),
          handlers: dragHandlers(rotation),
        };
      }),
    [items]
  );

  if (isMobile) {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-8'>
        {items.map((item) => (
          <div
            key={item.name}
            title={item.name}
            className='w-20 h-20 rounded-full flex items-center justify-center p-4 shadow-card border border-white/20'
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffffff, #e6dfd3 65%, #b8b0a4 100%)",
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              loading='lazy'
              className='w-11 h-11 object-contain drop-shadow-sm'
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className='flex flex-row flex-wrap justify-center gap-10'
      >
        {slots.map((slot) => (
          <div
            key={slot.name}
            ref={slot.track}
            title={slot.name}
            aria-label={slot.name}
            className='w-28 h-28 cursor-grab active:cursor-grabbing touch-pan-y'
            {...slot.handlers}
          />
        ))}
      </div>

      {inView &&
        createPortal(
          <Canvas
            dpr={[1, 2]}
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            <ClearCanvas />
            {slots.map((slot) => (
              <View key={slot.name} track={slot.track} index={2}>
                <Suspense fallback={null}>
                  <Ball imgUrl={slot.icon} rotation={slot.rotation} />
                </Suspense>
              </View>
            ))}
          </Canvas>,
          document.body
        )}
    </>
  );
};

export default BallGrid;
