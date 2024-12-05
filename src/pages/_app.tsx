import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>rOar</title>
        <meta name="viewport" content="width=500, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
