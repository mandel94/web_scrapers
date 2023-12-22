import React from "react";
import Navbar from "@/components/navigation/navbar/navbar";
import { NextPageWithLayout } from "./_app";
import { useLayoutContext } from "@/context/layoutContext";
import { LayoutProvider } from "@/context/layoutContext";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async () => {
  const navlinks = process.env.NAVBAR_LINKS.split(",");
  return { props: { navlinks } };
}) satisfies GetStaticProps<{
  navlinks: string[];
}>;

const Home: NextPageWithLayout = ({
  navlinks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentLayout, setCurrentLayout] = useLayoutContext();
  // const toggleLayout = ( layout: string ) => {
  //   layout === "sidebar" ? setCurrentLayout("navbar") : setCurrentLayout("sidebar")
  // }

  return (
    // Add Sidebar component with props extracted by configuration file
    // Basic home page
    <>
      <h1>This is the main page</h1>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <LayoutProvider>
      {page}
    </LayoutProvider>
  );
};

export default Home;
