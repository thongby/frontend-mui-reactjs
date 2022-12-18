import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type RDUTAWAIInfoChartProps = {
  //
};

const RDUTAWAIInfoChart: React.FC<any> = () => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "ผลิตภัณฑ์",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "สถานที่เสี่ยง",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="line" height={350}/>
    </>
  );
};

export default RDUTAWAIInfoChart;
