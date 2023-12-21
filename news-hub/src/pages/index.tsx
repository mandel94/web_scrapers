import DashboardLayout from "../layouts/dashboardLayout"; 
import HeaderContent from "../components/headerContent/headerContent";  
import MainContent from "../components/mainContent/mainContent"; 
import Logo from "../components/logo/logo";
import NavbarList from "../components/navbarList/navbarList";
import styles from "./home.module.css";


// Default page is OverviewPage

const MainPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles['main-container']}>
      <DashboardLayout>
        <HeaderContent Logo={ Logo } NavbarList={ NavbarList }/>
        <MainContent />
      </DashboardLayout>
      </div>
    </main>
  );
};

export default OverviewPage;