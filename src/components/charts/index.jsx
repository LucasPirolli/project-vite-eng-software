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
        categories: [1950, 1960, 1970, 1980, 1991, 2000, 2010, 2022],
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
        categories: [1950, 1960, 1970, 1980, 1991, 2000, 2010, 2020, 2022],
      },
    },
    series: [
      {
        name: "series-1",
        data: [50, 55, 98, 125, 91, 148, 198, 256, 350],
      },
    ],
  };

  const barChartSecundary = {
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

  return (
    <React.Fragment>
      <div className="container-chart">
        <div className="bar-chart">
          <h3>Decidindo</h3>
          <Chart
            type="bar"
            width="500"
            series={barChart.series}
            options={barChart.options}
          />
        </div>
        <div className="line-chart">
          <h3>População absoluta do Brasil - 1950 a 2022</h3>
          <Chart
            width="500"
            type="line"
            series={lineChart.series}
            options={lineChart.options}
          />
        </div>
        <div className="bar-chart">
          <h3>Decidindo</h3>
          <Chart
            type="bar"
            width="500"
            series={barChartSecundary.series}
            options={barChartSecundary.options}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Charts;
