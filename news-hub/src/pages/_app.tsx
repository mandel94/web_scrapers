import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { LayoutProvider, useLayoutContext } from "@/context/layoutContext";
import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};


export const getStaticProps = (async () => {
  const navlinks = process.env.NAVBAR_LINKS.split(",");
  return { props: { navlinks } };
}) satisfies GetStaticProps<{
  navlinks: string[];
}>;


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);


  return getLayout(
    <>
      <Head>
        <title>Title of the website</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
