import '@/styles/globals.css'
import '@/styles/mediaqueries.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}
