import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import emailjs from "@emailjs/browser";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    emailjs.init("wd_2Qwj84rFvUrjoG");
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
