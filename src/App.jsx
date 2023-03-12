import BarChart from "./component/Chart/Bar/BarChart";
import LineChart from "./component/Chart/Line/LineChart";
import PieChart from "./component/Chart/Pie/PieChart";
import { MainChartContainer } from "./component/Containers/ChartContainers.styled";




const App = () => {
  return (
    <MainChartContainer>
      <BarChart />
      <LineChart />
      <PieChart />
      <BarChart />
    </MainChartContainer>
  );
};

export default App;
