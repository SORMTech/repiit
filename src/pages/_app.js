import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from 'react'
import { AppProvider } from "../Layout/context";
import { analytics } from '../lib/firebase';
import { useRouter } from "next/router";
import { AuthContextProvider } from '../context/AuthContext'

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
  }, [routers])

  // const logout = async () => {
  //   setCurrentUser(null)
  //   let msg = 'success';
  //   await signOut(auth).catch(e => {
  //     msg = e.message
  //   });
  //   console.log("Logout msg >>>", msg)
  // }

  return (
    <>
      <AuthContextProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
