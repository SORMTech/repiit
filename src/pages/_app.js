import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../Layout/layout";
import { AppProvider } from "../Layout/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
