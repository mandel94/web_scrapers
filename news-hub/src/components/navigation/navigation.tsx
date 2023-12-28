import React from "react";
import { Navigation, SayALayout } from "@/types/navigationTypes";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import Navbar from "@/components/navigation/navbar/navbar";
import { useState } from "react";
import { Switch } from "@/components/utils/Switch";



const Navigation: Navigation = ({ logo, links, layout }) => {

  const [currentLayout, setcurrentLayout] = useState<SayALayout>(layout);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleLayout = (layout: SayALayout) => {
    setcurrentLayout(layout);
  }

  return (
    <div className="navigation">
    <Switch condition={ currentLayout }>
      <Switch.Case when={ "sidebar" }>
        <Sidebar logo={{...logo}} links={ links } isOpen={ isOpen } />
      </Switch.Case>
      <Switch.Case when={ "navbar" }>
        <Navbar logo={{...logo}} links={ links } isOpen={ isOpen } />
      </Switch.Case>
      <Switch.Default>
        <Sidebar logo={{...logo}} links={ links } isOpen={ isOpen } />
      </Switch.Default>
    </Switch>
    <button onClick={() => toggleLayout("navbar")}>Switch</button>
    </div>  
  );
};

export default Navigation;
