import { json } from "@remix-run/node";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "@remix-run/react";

export const loader = () => {
  return json({});
};

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((_state, delta) => {
    return (meshRef.current!.rotation.x += delta);
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "green" : "blue"} />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      <div>
        <h1>Sample</h1>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
}
