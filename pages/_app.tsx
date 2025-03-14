import VantaBackground from "../components/VantaBackground";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VantaBackground>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VantaBackground>
  );
}
