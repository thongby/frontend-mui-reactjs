import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type RDUGroceriesPassChartProps = {
  //
};

const RDUGroceriesPassChart: React.FC<any> = () => {
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['ผ่าน', 'ไม่ผ่าน'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }

  const series = [2500, 82500];

  return (
    <>
      <ReactApexChart options={options} series={series} type="pie" height={350} width={350} />
    </>
  );
};

export default RDUGroceriesPassChart;
