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
        categories: [
          2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
          2019, 2020, 2021
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          160000, 159000, 153000, 150000, 147000, 142000, 138000, 136000,
          136000, 134000, 130000, 129000, 128000, 127000,
        ],
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
          <h3>Matrículas Ensino Médio Brasil - 2021</h3>
          <Chart
            type="bar"
            width="500"
            series={barChart.series}
            options={barChart.options}
          />
        </div>
        <div className="line-chart">
          <h3>Matrículas Ensino Fundamental Brasil - 2021</h3>
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
