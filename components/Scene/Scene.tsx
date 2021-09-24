import { FC } from "react";
import { OrbitControls } from "@react-three/drei";
import Box from "../Box";

const Scene: FC = () => {
  return (
    <>
      <OrbitControls enablePan enableZoom enableRotate />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Box spin="x" position={[0, -2, -10]} />
      <Box spin="y" position={[-2, 0, -5]} />
      <Box spin="z" position={[-5, -2, 10]} />
      <Box spin="z" position={[-3, 2, 5]} />
      <Box spin="z" position={[3, 2, 0]} />
    </>
  );
};

export default Scene;
