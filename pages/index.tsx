import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

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
