// Component returning <h1 className="text-blue-500">I'm blue!</h1>

import React from 'react';

// Define TypeScript for Sidebar
interface OverviewProps {
  // TODO
}

// Define Overview function
const Overview: React.FC<OverviewProps> = () => {
  return (
    <h1 className="text-blue-500">I'm blue!</h1>
  );
};


export default Overview;
