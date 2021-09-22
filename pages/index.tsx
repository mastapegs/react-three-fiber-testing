import { FC, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial, BoxGeometry } from "three";

interface BoxProps {
  position: [number, number, number];
}
const Box: FC<BoxProps> = ({ position }) => {
  const mesh = useRef<Mesh<BoxGeometry, MeshStandardMaterial>>(null);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!mesh || !mesh.current) return;
    mesh.current.rotation.y += 0.01;
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
  <div className="min-h-screen bg-green-200">
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-5, -1, 0]} />
      <Box position={[-2, -1, 0]} />
      <Box position={[2, -1, 0]} />
      <Box position={[5, -1, 0]} />
    </Canvas>
  </div>
);

export default Index;
