import { Chart as ChartJS } from "chart.js/auto";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";
const BarChart = ({ chartData }) => {
  console.log(ChartJS);
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(201, 203, 207, 0.2)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    borderJoinStyle: "round"
  };
  const BarChartContainer = styled.div`
    width: 500px;
    height: 400px;
  `;
  return (
    <BarChartContainer>
      <Radar data={chartData} options={barChartOptions} />
    </BarChartContainer>
  );
};

export default BarChart;
