import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="./styles/globals.css" />
      </Head>

        <body class="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
