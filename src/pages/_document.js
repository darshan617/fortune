import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Fortune Group</title>
        <Link rel="icon" href="/images/FORTUNE-LOGO-192x192.png"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
