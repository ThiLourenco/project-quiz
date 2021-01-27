import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
//import Head from '../src/components/Head';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta key="og:image" property="og:image" content={MY_SEO.openGraph.image} />
      <meta key="og:image:secure_url" property="og:image:secure_url" content={MY_SEO.openGraph.image} />
      <meta key="og:image:alt" property="og:image:alt" content="NodeJS"/>
      <meta key="og:image:type" property="og:image:type" content="image/jpg"/>
      <meta key="og:image:width" property="og:image:width" content="1200"/>
      <meta key="og:image:height" property="og:image:height" content="630"/>
      <meta key="twitter:card" name="twitter:card" content="summary_large_image"/>
      <meta key="twitter:title" name="twitter:title" content="Quiz Nodejs"/>
      <meta Key="twitter:site" name="twitter:site" content="@thilourenco"/>
      <meta Key="twitter:creator" name="twitter:creator" content="@thilourenco"/>
      <meta Key="twitter:image" name="twitter:image" content={MY_SEO.openGraph.image} />
      <meta Key="twitter:image:src" name="twitter:image:src" content={MY_SEO.openGraph.image} />
      <meta Key="twitter:image:alt" name="twitter:image:alt" content="NodeJS"/>    
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

