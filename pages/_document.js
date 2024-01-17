import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
        <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"  />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap" rel="stylesheet" /> 
          <meta name="google-site-verification" content="qfPVCZL7gfJX-zyZUaYDBLBhoAiMvXx2sn5BGxiSmLE" />
        </Head>
      <body className='debug-screens'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
