import type { AppProps } from "next/app";
import "@/styles/globals.scss";

import Navbar from "../components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ticket Manager - Streamline your ticketing process and enhance your workflow. Manage, organize, and resolve tickets efficiently."
        />
        <meta
          name="keywords"
          content="ticket manager, workflow, organize tickets, resolve tickets, support system"
        />
        <meta name="author" content="kruzusLabs" />
        <title>Ticket Manager</title>
      </Head>
      <Navbar />
      <main className="container mx-auto px-8 py-9 bg-base-200 rounded-md">
        <Component {...pageProps} />
      </main>
    </>
  );
}
