import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import MY_SEO from '../src/config/config';
import Head from '../src/components/Head';

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
      <Head 
        title={MY_SEO.title} 
        description={MY_SEO.description} 
        type={MY_SEO.openGraph.type}
        url={MY_SEO.openGraph.url}
        title={MY_SEO.openGraph.title}
        keywords={MY_SEO.openGraph.keywords}
        image={MY_SEO.openGraph.image}
          />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

