import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContextProvider } from "@/context/AuthContext";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
