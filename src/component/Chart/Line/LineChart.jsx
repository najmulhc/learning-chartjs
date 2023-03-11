import {
  BarContainer,
  ChartTitle,
} from "../../Containers/ChartContainers.styled";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { traffic } from "../../../data/ratulSinha";
ChartJS.register(
  LineElement,
  Legend,
  Tooltip,
  CategoryScale,
  PointElement,
  ArcElement
);
const LineChart = () => {
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ],
    datasets: [
      {
        label: "Twitter followers",
        data: traffic,
        backgroundColor: ["rgba(29, 161, 242, 0.2)"],
        borderColor: ["rgba(29, 161, 242, 1.0)"],
        pointBackgroundColor: ["rgba(29, 161, 242, 1.0)"],
        borderWidth: 1.5,
        pointRadius: 1.5,
        gridLines: {
          display: false,
        },
      },
      {
        label: "Facebook followers",
        data: [3420, 4203, 5303, 4904, 6500, 6799, 7302, 7832, 8256, 9304],
        backgroundColor: ["rgba(24,119,242 , 0.2)"],
        borderColor: ["rgba(24,119,242, 1.0)"],
        pointBackgroundColor: ["rgba(24,119,242, 1.0)"],
        borderWidth: 1.5,
        pointRadius: 1.5,
        gridLines: {
          display: false,
        },
      },
    ],
  };

  return (
    <BarContainer>
      <ChartTitle>Bitcoin's weekly Folowers</ChartTitle>
      <Line
        data={data}
        options={{
          lineTension: 0.4,
          scales: {
            y: {
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </BarContainer>
  );
};

export default LineChart;
