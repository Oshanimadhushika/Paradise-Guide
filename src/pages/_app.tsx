import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Detail from './detail';
import Home from './index';
import SeeAllPage from '@/components/SeeAllPage';
import emailjs from '@emailjs/browser';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/see-all" element={<SeeAllPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default MyApp;
