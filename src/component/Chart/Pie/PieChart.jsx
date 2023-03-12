import { Pie } from "react-chartjs-2";
import phoneCompanies from "../../../data/marketShare";
import { Chart as ChartJS } from "chart.js";
import {
  BarContainer,
  ChartTitle,
} from "../../Containers/ChartContainers.styled";

ChartJS.register();
const PieChart = () => {
  const data = {
    labels: Object.keys(phoneCompanies),
    datasets: [
      {
        label: "Market Share",
        data: Object.values(phoneCompanies),
        borderColor: [
          "rgba(0, 114, 187, 1)", // Grameenphone
          "rgba(241, 90, 34, 1)", // Robi
          "rgba(0, 114, 187, 1)", // Banglalink
          "rgba(239, 51, 64, 1)", // Teletalk
        ],
        backgroundColor: [
          "rgba(2, 132, 70, 0.1)", // Grameenphone
          "rgba(241, 90, 34, 0.1)", // Robi
          "rgba(0, 114, 187, 0.1)", // Banglalink
          "rgba(239, 51, 64, 0.1)", // Teletalk
        ],
      },
    ],
  };
  console.log(data);
  return (
    <BarContainer>
      <ChartTitle>Market Share of mobile Operators In bangladesh</ChartTitle>
      <Pie data={data} />
    </BarContainer>
  );
};

export default PieChart;
