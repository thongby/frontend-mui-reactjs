import { ApexOptions } from "apexcharts";
import * as React from "react";
import ReactApexChart from "react-apexcharts";

type HPVCDrugPer10000AdmissionsByKhetChartProps = {
  //
};

const HPVCDrugPer10000AdmissionsByKhetChart: React.FC<any> = () => {
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
        text: "x1",
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
      name: "2564",
      data: [8.67, 5.2, 5.49, 5.98, 9.37, 7.25, 3.87, 10.23, 4.51, 5.88, 3.67, 3.89, 48.17],
    },
    {
      name: "2565",
      data: [6.75, 2.67, 4.63, 2.48, 5.46, 4.87, 3.51, 6.07, 3.67, 5.99, 1.91, 3.13, 31.82],
    },
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

export default HPVCDrugPer10000AdmissionsByKhetChart;
