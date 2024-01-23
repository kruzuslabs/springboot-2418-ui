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
          content="Task Manager - The perfect tool to manage your tasks and improve your productivity. Create, organize and complete your tasks easily."
        />
        <meta
          name="keywords"
          content="task manager, productivity, create tasks, complete tasks, organize tasks"
        />
        <meta name="author" content="kruzusLabs" />
        <title>Task Manager</title>
      </Head>
      <Navbar />
      <main className="container mx-auto px-8 py-9 bg-base-200 rounded-md">
        <Component {...pageProps} />
      </main>
    </>
  );
}
