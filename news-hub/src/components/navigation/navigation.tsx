import React from "react";
import { Navigation } from "@/types/userTypes";
import { SayALayout, MenuProps } from "@/types/utilsTypes";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import Navbar from "@/components/navigation/navbar/navbar";
import { useState } from "react";
import { Switch } from "@/components/utils/Switch";



const Navigation: Navigation = ({ logo, links, layout }) => {

  const [currentLayout, setcurrentLayout] = useState<SayALayout>(layout);

  const toggleLayout = (layout: SayALayout) => {
    setcurrentLayout(layout);
  }

  const menu: MenuProps = {
    links: links,
    isOpen: false,
  }

  return (
    <div className="navigation">
    <Switch condition={ currentLayout }>
      <Switch.Case when={ "sidebar" }>
        <Sidebar logo={{...logo}} menu={{...menu}} />
      </Switch.Case>
      <Switch.Case when={ "navbar" }>
        <Navbar logo={{...logo}} menu={{...menu}} />
      </Switch.Case>
      <Switch.Default>
        <Sidebar logo={{...logo}} menu={{...menu}} />
      </Switch.Default>
    </Switch>
    <button onClick={() => toggleLayout("navbar")}>Switch</button>
    </div>  
  );
};

export default Navigation;
