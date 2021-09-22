import { FC, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial, BoxGeometry } from "three";

interface BoxProps {
  position: [number, number, number];
  spin?: "x" | "y" | "z";
}
const Box: FC<BoxProps> = ({ position, spin = "x" }) => {
  const mesh = useRef<Mesh<BoxGeometry, MeshStandardMaterial>>(null);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!mesh || !mesh.current) return;
    mesh.current.rotation[spin] += 0.01;
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "blue" : "red"} />
    </mesh>
  );
};

const Index: FC = () => (
  <Canvas className="min-h-screen">
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box spin="x" position={[-3, 0, 0]} />
    <Box spin="y" position={[-1, 0, 0]} />
    <Box spin="z" position={[1, 0, 0]} />
    <Box position={[3, 0, 0]} />
  </Canvas>
);

export default Index;
