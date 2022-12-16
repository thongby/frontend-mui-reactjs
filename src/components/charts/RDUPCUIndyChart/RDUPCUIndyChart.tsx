import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type RDUPCUIndyChartProps = {
  //
};

const RDUPCUIndyChart: React.FC<any> = () => {
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
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="line" height={350} width={800} />
    </>
  );
};

export default RDUPCUIndyChart;
