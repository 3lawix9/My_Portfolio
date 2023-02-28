import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return( 
    <>
      <Head>
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
