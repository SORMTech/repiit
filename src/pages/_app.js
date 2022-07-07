import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect } from 'react';
import { AppProvider } from "../Layout/context";
import { analytics } from '../lib/firebase';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && analytics) {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, [])

  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
