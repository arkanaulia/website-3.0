import Idlelogo from "https://framer.com/m/idlelogo-TKFx.js@kofpiXmnXsVOMD84aYmV";

export default function Topnav() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-max h-max bg-gray-500 z-10 opacity-30">
        <h2 className="p-2 ml-5 text-white text-xs ">psstt, try drag around and zoom out your browser ;D</h2>
      </div>
      <div className=" h-max w-full z-10 flex flex-row items-center justify-between py-5 px-10 text-white">
        <Idlelogo />
        <h1 className="w-max h-auto text-xl">say hi!</h1>
      </div>
    </div>
  );
}
