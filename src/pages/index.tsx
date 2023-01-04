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
      <h1 className="flex flex-col h-screen items-center justify-center">Hello World</h1>
    </div>
  );
}
