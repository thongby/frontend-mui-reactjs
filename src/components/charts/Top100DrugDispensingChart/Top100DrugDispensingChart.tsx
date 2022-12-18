import { ApexOptions } from "apexcharts";
import * as React from "react";
import ReactApexChart from "react-apexcharts";

type Top100DrugDispensingChartProps = {
  //
};

const Top100DrugDispensingChart: React.FC<any> = () => {
  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    title: {
      text: '100 อันดับยาที่มีมูลค่าการใช้มากสุด'
    }
  };

  const series = [
    {
      data: [
        {
          x: 'Drug A',
          y: 218
        },
        {
          x: 'Drug B',
          y: 149
        },
        {
          x: 'Drug C',
          y: 184
        },
        {
          x: 'Drug D',
          y: 55
        },
        {
          x: 'Drug E',
          y: 84
        },
        {
          x: 'Drug F',
          y: 31
        },
        {
          x: 'Drug G',
          y: 70
        },
        {
          x: 'JaipurDrug H',
          y: 30
        },
        {
          x: 'Drug I',
          y: 44
        },
        {
          x: 'Drug J',
          y: 68
        },
        {
          x: 'Drug K',
          y: 28
        },
        {
          x: 'Drug L',
          y: 19
        },
        {
          x: 'Drug M',
          y: 29
        }
      ]
    }
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="treemap" height={350} />
    </>
  );
};

export default Top100DrugDispensingChart;
