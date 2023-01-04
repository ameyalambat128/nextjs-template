import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template</title>
        <meta name="description" content="Nextjs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="flex h-screen flex-col items-center justify-center text-6xl font-black tracking-tighter">
        Hello, <br /> This is a Next.js Template
      </h1>
    </div>
  );
}
