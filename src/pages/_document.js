import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
            integrity="sha512-DbcMdZvcJjLftzv62yP6WpU9cR1ZWwuZJP45J5U6W5PIM3dD6QnzaVh8fJ2Cll9dRXDn0AtZn7z1HSoG+Vohg=="
            crossOrigin="anonymous"
          />
        </Head>
      
      <body class="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
