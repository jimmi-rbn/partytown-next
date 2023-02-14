import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <noscript>
          <iframe
            title="GTM"
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8BJCPZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
