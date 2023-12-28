import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@/components/navigation/navigation";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};



type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const title = "News Hub";

  const logo = {
    src: "/images/Color logo with background.png",
    alt: "News Hub Logo"
  }

  const links = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "About",
      url: "/about"
    },
    {
      text: "Contact",
      url: "/contact"
    }
  ]
  
  const layout = "sidebar";

  return getLayout(
    <>
      <Head>
        <title> { title } </title>
      </Head>
      {/* <Navigation logo={ logo } links={ links } layout={ layout } /> */}
      <Component {...pageProps} />
    </>
  );
}
