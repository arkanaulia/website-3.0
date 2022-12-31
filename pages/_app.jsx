import "../styles/globals.css"
import Loading from "../components/Loading";
import React, { useState,useEffect } from "react";
import Router from "next/router";

function MyApp ({ Component, pageProps: { ...pageProps } }) {
const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("START")
      setLoading(true);
    };
    const end = () => {
      console.log("end")
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    // console.log(loading )
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
    return(
      <>
        {loading ? (<Loading />) : (<Component {...pageProps} />)} 
      </>
    ) 
}

export default MyApp
