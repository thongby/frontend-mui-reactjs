import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type RDUPrivateHosPassChartProps = {
  //
};

const RDUPrivateHosPassChart: React.FC<any> = () => {
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
        text: "% ผ่านเกณฑ์",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "%" + val + " ผ่าน";
          //return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    {
      name: "โรงพยาบาลเอกชน",
      data: [82, 83, 83, 82, 81, 88, 83, 80, 86,80,81,85],
    },
    /* {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
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

export default RDUPrivateHosPassChart;
