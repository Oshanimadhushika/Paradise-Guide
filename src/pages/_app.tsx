import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './detail';
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}
