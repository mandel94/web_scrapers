import Sidebar from '../components/sidebar/sidebar';
import DashboardMain from '../components/dashboardMain/dashboardMain';
import React from 'react';
import HeaderContent from '../components/headerContent/headerContent';
import MainContent from '../components/mainContent/mainContent';


interface DashboardLayoutProps {
    /* Dashboard layout props take two React components:
        1. The HeaderContent, that is to be placed inside the sidebar 
        2. The MainContent, that is to be place inside the dashboard's main 
           container
    */
    children: [React.ReactElement<typeof HeaderContent>, 
               React.ReactElement<typeof MainContent>];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className='dashboard-layout'>
            <Sidebar>
                {children[0]}
            </Sidebar>
            <DashboardMain>
                {children[1]}
            </DashboardMain>
        </div>
    );
}

export default DashboardLayout;



