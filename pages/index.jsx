import Head from "next/head";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Landing from "../components/Landing";
import Topnav from "../components/Topnav";
import Botnav from "../components/Botnav";
import { Suspense } from "react";

// const Landing = React.lazy(() => import( "../components/Landing"));
import Loading from "../components/Loading";

export default function Home() {
  return (
    <>
      <Head>
        <title>arkanaulia</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className="flex flex-col">
      <Topnav />
      <Suspense fallback={<Loading />}  >
        <Landing />
      </Suspense>
      <Botnav />

      </div>
    </>
  );
}
