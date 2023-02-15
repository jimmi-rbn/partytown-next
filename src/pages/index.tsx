import Head from "next/head";
import Script from "next/script";
import { Partytown } from "@builder.io/partytown/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Partytown next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          id="gtm"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'/gtm.js';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8BJCPZ')
          `,
          }}
        />
      </Head>

      {/* <Script
        strategy="worker"
        id="CookieConsent"
        src="/cookieinformation.js"
        data-culture="EN"
        type="text/javascript"
      ></Script> */}
      <main>Partytown next</main>
    </>
  );
}
