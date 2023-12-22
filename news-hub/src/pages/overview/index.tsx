import { useLayoutContext } from "@/context/layoutContext";

const OverviewPage = () => {
  const [currentLayout, setCurrentLayout] = useLayoutContext(); 

    return (
    <div>
      <h1>Overview</h1>
      Current Layout is { currentLayout }
    </div>
  );
};


export default OverviewPage;