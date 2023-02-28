import '../styles/globals.css'
import { css } from '@emotion/react';

const globalStyles = css`
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} css={globalStyles} />
}

export default MyApp
