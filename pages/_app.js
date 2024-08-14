import Head from 'next/head';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
          <title>Ali Ahmed Portofolio</title>
          #another title 

        </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
