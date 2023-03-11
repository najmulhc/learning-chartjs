import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import {
  BarContainer,
  ChartTitle,
} from "../../Containers/ChartContainers.styled";
import { months } from "../../../data/tempareture";
import { temp } from "../../../data/tempareture";




ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend);

// main bar component 
const BarChart = () => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Dhaka",
        data: temp[0].temps,
        backgroundColor: ["rgba(51, 204, 51, 0.2)"],
        borderColor: ["rgba(51, 204, 51, 1)"],
        borderWidth: 1,
      },
      {
        label: "Darjeeling",
        data: temp[1].temps,
        backgroundColor: ["rgba(0, 53, 128, 0.2)"],
        borderColor: ["rgba(0, 53, 128, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    backgroundColor: "white",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <BarContainer>
      <ChartTitle> Tempareture in Dhaka and Darjeeling</ChartTitle>
      <Bar data={data} options={options} />
    </BarContainer>
  );
};

export default BarChart;
