import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContextProvider } from "@/context/AuthContext";
import { JournalContextProvider } from "@/context/entryContext";
import { EntriesProvider } from "@/context/entriesContext";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <JournalContextProvider>
        <EntriesProvider>
          <Layout>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </EntriesProvider>
      </JournalContextProvider>
    </AuthContextProvider>
  );
}
