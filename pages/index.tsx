import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";

const Index: FC = () => (
  <Canvas className="min-h-screen max-h-screen bg-black">
    <Scene />
  </Canvas>
);

export default Index;
