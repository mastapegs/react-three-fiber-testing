import { FC, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
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

export default Box;
