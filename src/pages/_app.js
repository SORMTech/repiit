import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../Layout/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
