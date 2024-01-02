import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useAppContext } from 'context/AppContext';

const DonutChart = () => {
  const appContext = useAppContext();
  const donutChart = {
    series: [80, 42, 50],
    options: {
      colors: ['#cb2b83', '#49aa19', '#d87a16'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Income', 'Completed', 'Pending'],
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: 300
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              width: 200
            }
          }
        }
      ]
    }
  };
  return (
    <ReactApexChart
      options={{
        ...(donutChart.options as unknown as ApexOptions),
        theme: { mode: appContext.mode }
      }}
      series={donutChart.series}
      type="donut"
    />
  );
};

export default DonutChart;
