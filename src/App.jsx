import { useState } from "react";
import BarChart from "./components/BarChart";
import data from "./data";

function App() {
  const [companyData, setCompanyData] = useState({
    labels: data.map(item => item.name), 
    datasets:[{
      label: "Numbers of Users Gained", 
      data: data.map(item => item.userGained)
    }]
  });
  return (
    <div className="App">
      <BarChart chartData={companyData} />
    </div>
  );
}

export default App;
