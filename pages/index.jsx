import Head from "next/head";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Landing from "../components/Landing";
import Topnav from "../components/Topnav";
import Botnav from "../components/Botnav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col">
      <Topnav />
      <Landing />
      <Botnav />

      </div>
    </>
  );
}
