import Head from "next/head";
import "twin.macro";

export default function Home() {
  return (
    <div tw="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 tw="text-red-500">Hello, Next World</h1>
    </div>
  );
}
