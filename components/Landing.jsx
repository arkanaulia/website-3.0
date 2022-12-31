import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function Landing() {
  return (
    <Suspense fallback="loading...">
      <div className="w-full h-full absolute">
      <Spline scene="https://prod.spline.design/baG5ZVH4xAfQ9a0S/scene.splinecode" /></div>
    </Suspense>
  );
}
