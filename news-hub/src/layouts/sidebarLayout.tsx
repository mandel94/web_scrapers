// FOLLOW https://hackernoon.com/building-a-sidebar-in-react-with-a-higher-order-component

import React from "react";
import Logo from "../logo/logo";
import HeaderContent from "../headerContent/headerContent";

// Define TypeScript for Sidebar
interface SidebarProps {
  // Takes Header Content as a React component
  children: React.ReactElement<typeof HeaderContent>;
}

// Define Sidebar function
const SidebarLayout: React.FC<SidebarProps> = ({ children }) => {
  return (
    <section className="sidebar">
      { children }
    </section>
  );
};

// Export Sidebar
export default SidebarLayout;

