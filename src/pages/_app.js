import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from 'react'
import { AppProvider } from "../Layout/context";
import { analytics } from '../lib/firebase';
import { useRouter } from "next/router";
import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  // useEffect(() => {
  //   const unsubscribe = async () => {
  //     if (process.env.NODE_ENV === 'production' && analytics) {
  //       const logEvent = (url) => {
  //         analytics().setCurrentScreen(url);
  //         analytics().logEvent('screen_view');
  //       };
  
  //       routers.events.on('routeChangeComplete', logEvent);
  //       //For First Page
  //       logEvent(window.location.pathname);
  //       await fetch('api/history', {
  //         method: 'POST',
  //         body: JSON.stringify({ user: null, action: 'screen_view', details: window.location.pathname })
  //       })
  
  //       //Remvove Event Listener after un-mount
  //       return () => {
  //         routers.events.off('routeChangeComplete', logEvent);
  //       };
  //     }
  //   }
  //   return unsubscribe
  // }, [routers])

  return (
    <>
      <div id="spinner" className="hidden fixed top-0 left-0 w-full h-screen z-[99]" style={{ background: 'rgba(0,0,0,.7)' }}>
        <div className="fixed top-0 left-0 w-full h-screen grid place-items-center">
          <div id="spinnerBody" className="flex justify-center items-center">
            <div 
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" 
            style={{ borderImage: "linear-gradient(45deg, red, orange) 1" }}
            role="status">
              <span className="hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <AuthContextProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
