import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { useAppContext } from 'context/AppContext';

const BarChart = () => {
  const appContext = useAppContext();

  const data = [450, 200, 100, 220, 500, 100, 400, 230, 500];
  const categories = [
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct'
  ];

  const barChart = {
    series: [
      {
        name: 'Sales',
        data
      }
    ],
    options: {
      chart: {
        width: '100%',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true,
        borderColor: '#ccc',
        strokeDashArray: 2
      },
      xaxis: {
        categories
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    }
  };
  return (
    <ReactApexChart
      options={{
        ...(barChart.options as unknown as ApexOptions),
        theme: { mode: appContext.mode }
      }}
      series={barChart.series}
      type="bar"
      height={220}
    />
  );
};

export default BarChart;
