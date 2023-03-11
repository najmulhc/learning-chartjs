import styled from "styled-components";

//main container
export const MainChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 0 auto;
`;

// chart titles
export const ChartTitle = styled.h2`
  color: white;
  font-weight: 500;
  text-align: center;
  font-family: "Jetbrains Mono";
  padding: 0.5rem 0;
`;

// containers for charts
export const BarContainer = styled.div`
 
  border: 2px solid white;
  padding: 1rem;
  height: 300px;
`;
export const LineContainter = styled.div``;
export const PieContainer = styled.div``;
export const RadarContrainer = styled.div``;
export const PolerAreaContainer = styled.div``;
