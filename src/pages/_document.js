import { Html, Head, Main, NextScript } from 'next/document'
import {style} from '../styles/globals.css'


export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <link rel="stylesheet" href={style} />
        <body class="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
