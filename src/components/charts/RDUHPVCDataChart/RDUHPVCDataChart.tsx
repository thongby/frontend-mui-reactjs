import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type RDUHPVCDataChartProps = {
  //
};

const RDUHPVCDataChart: React.FC<any> = () => {
  const options: ApexOptions = {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["AE1", "AE2", "AE3", "AE4"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      /* markers: {
        size: 0
      }, */
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const series = [76, 67, 61, 90];

  return (
    <>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
    </>
  );
};

export default RDUHPVCDataChart;
