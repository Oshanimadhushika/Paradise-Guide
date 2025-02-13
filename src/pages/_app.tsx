import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Home from './index';
import SeeAllPage from '@/components/SeeAllPage';
import emailjs from '@emailjs/browser';
import DetailPage from "@/components/DetailPage";

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
          {/* <Route path="/detail" element={<Detail/>} /> */}
          {/* <Route path="/detail/:locationSlug" element={<Detail />} /> */}

          <Route path="/detail/:location_id/:location_code" element={<DetailPage/>} />


          <Route path="/see-all" element={<SeeAllPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default MyApp;
