import React from "react";
import Chart from "react-apexcharts";
import "./style.css";

function Charts() {
  const barChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2003],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 120],
      },
    ],
  };

  const lineChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2003],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 120],
      },
    ],
  };

  const donutChart = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };

  return (
    <React.Fragment>
      <div className="container-chart">
        <div className="bar-chart">
          <Chart
            options={barChart.options}
            series={barChart.series}
            type="bar"
            width="500"
          />
          <h2 className="title-bar">Gráfico de tal coisa</h2>
        </div>
        <div className="line-chart">
          <Chart
            options={lineChart.options}
            series={lineChart.series}
            type="line"
            width="500"
          />
          <h2>Gráfico de tal coisa</h2>
        </div>
        <div className="donut-chart">
          <Chart
            options={donutChart.options}
            series={donutChart.series}
            type="donut"
            width="380"
          />
          <h2>Gráfico de tal coisa</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Charts;
