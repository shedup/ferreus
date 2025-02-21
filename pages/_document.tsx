import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/static/PFS-optimized.svg" />
        <meta charSet="UTF-8"></meta>
        <meta
          name="keywords"
          content="Pons Ferreus Solutions provides digital solution consulting to companies."
        ></meta>
        <meta
          name="description"
          content="provides digital solution consulting to companies"
        ></meta>
        <meta name="author" content="Tenzin Chaksam"></meta>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
