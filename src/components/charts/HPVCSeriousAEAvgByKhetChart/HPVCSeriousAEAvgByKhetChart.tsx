import { ApexOptions } from "apexcharts";
import * as React from "react";
import ReactApexChart from "react-apexcharts";

type HPVCSeriousAEAvgByKhetChartProps = {
  //
};

const HPVCSeriousAEAvgByKhetChart: React.FC<any> = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        //endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "เขต 1",
        "เขต 2",
        "เขต 3",
        "เขต 4",
        "เขต 5",
        "เขต 6",
        "เขต 7",
        "เขต 8",
        "เขต 9",
        "เขต 10",
        "เขต 11",
        "เขต 12",
        "เขต 13",
      ],
    },
    yaxis: {
      title: {
        text: "ต่อล้านคน",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "# " + val + " ###";
          //return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    {
      name: "ค่าเฉลี่ยรายงาน serious AE",
      data: [115.91, 52.63, 64.84, 31.63, 171.81, 173.87, 28.59, 308.46, 53.33, 204.63, 32.49, 57.15, 149.96],
    },
    /* {
      name: "2565",
      data: [6.75, 2.67, 4.63, 2.48, 5.46, 4.87, 3.51, 6.07, 3.67, 5.99, 1.91, 3.13, 31.82],
    }, */
    /* {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    }, */
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </>
  );
};

export default HPVCSeriousAEAvgByKhetChart;
