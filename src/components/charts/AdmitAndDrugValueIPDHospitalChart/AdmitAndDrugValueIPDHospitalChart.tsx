import { ApexOptions } from "apexcharts";
import * as React from "react";
import ReactApexChart from "react-apexcharts";

type AdmitAndDrugValueIPDHospitalChartProps = {
  //
};

const AdmitAndDrugValueIPDHospitalChart: React.FC<any> = () => {
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
      categories: ["เขต 1", "เขต 2", "เขต 3", "เขต 4", "เขต 5", "เขต 6", "เขต 7", "เขต 8", "เขต 9","เขต 10","เขต 11","เขต 12"],
    },
    yaxis: {
      title: {
        text: "x10000",
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
      name: "จำนวนใบสั่งยา",
      data: [82, 83, 83, 82, 81, 88, 83, 80, 86,80,81,85],
    },
    {
      name: "มูลค่ายา",
      data: [2276, 2285, 2101, 2298, 2287, 2105, 2291, 2114, 2394, 2455,2300,2500],
    },
    /* {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    }, */
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" height={350}/>
    </>
  );
};

export default AdmitAndDrugValueIPDHospitalChart;
