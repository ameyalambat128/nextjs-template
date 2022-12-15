import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Breze Test</title>
        <meta name="description" content="Breze Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold">Hello World</h1>
    </div>
  );
}
