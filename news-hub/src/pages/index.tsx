import React from "react";
import { useState } from "react";
import { SideBar } from "@/types/types";
import { NextPageWithLayout } from "./_app";
import { useLayoutContext } from "@/context/layoutContext";

const Home: NextPageWithLayout = () => {
  const [currentLayout, setCurrentLayout] = useLayoutContext();
  const toggleLayout = ( layout: string ) => {
    layout === "sidebar" ? setCurrentLayout("navbar") : setCurrentLayout("sidebar") 
  }

  return (
    <div className="home">
      <h1>Change Layout</h1>
      <button onClick={() => toggleLayout(currentLayout) }>Click here!</button>
      <div className="current-layout">
        <h2>Current Layout: { currentLayout }</h2>
      </div>
    </div>
  );
};
