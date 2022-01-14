import "../styles/app.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap`);
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
