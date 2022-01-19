import { ThemeProvider } from "next-themes";
import "../styles/app.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // defining theme value
  if (typeof Storage !== "undefined") {
    if (!localStorage.theme) {
      localStorage.setItem("theme", "light");
    }
  }
  return (
    <>
      <Head>
        <title>Blogism</title>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap`);
        </style>
      </Head>
      <ThemeProvider enableColorScheme={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
