import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { LayoutProvider, useLayoutContext } from "@/context/layoutContext";
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

  const [currentlayout, setLayout] = useLayoutContext();

  return getLayout(
    <LayoutProvider>
      <Head>
        <title>Title of the website</title>
      </Head>
      <Navigation layoutType= { currentlayout }/>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
