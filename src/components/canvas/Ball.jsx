import React, { Suspense, createRef, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, View, useTexture } from "@react-three/drei";

/*
 * All tech balls are rendered into ONE shared WebGL canvas (via drei <View>).
 * Browsers cap live WebGL contexts (~16 in Chrome), so giving each ball its own
 * <Canvas> breaks once there are many skills. Each ball is "tracked" from a
 * plain DOM slot; the fixed, click-through canvas draws the ball at that spot.
 */

const Ball = ({ imgUrl, rotation }) => {
  const [decal] = useTexture([imgUrl]);
  const mesh = useRef();

  // Apply drag rotation (smoothly) set by the DOM slot's pointer handlers.
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

// Views draw with scissor regions only; wipe the whole canvas first each frame
// so balls that move (scroll) don't leave trails behind.
const ClearCanvas = () => {
  useFrame(({ gl }) => {
    gl.setScissorTest(false);
    gl.clear(true, true);
  }, 1);
  return null;
};

// Only mount the WebGL canvas while the section is (nearly) on screen.
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

// Drag-to-rotate handlers for a DOM slot (replaces per-canvas OrbitControls).
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
  const inView = useInView(containerRef);

  const slots = useMemo(
    () =>
      items.map((item) => {
        const rotation = { x: 0, y: 0 };
        return { ...item, rotation, track: createRef(), handlers: dragHandlers(rotation) };
      }),
    [items]
  );

  return (
    <>
      <div ref={containerRef} className='flex flex-row flex-wrap justify-center gap-10'>
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
              zIndex: 10, // below the fixed navbar (z-20)
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
