import BarChart from "./component/Chart/Bar/BarChart";
import LineChart from "./component/Chart/Line/LineChart";
import { MainChartContainer } from "./component/Containers/ChartContainers.styled";




const App = () => {
  return (
    <MainChartContainer>
      <BarChart />
      <LineChart />
      <BarChart />
      <BarChart />
    </MainChartContainer>
  );
};

export default App;
