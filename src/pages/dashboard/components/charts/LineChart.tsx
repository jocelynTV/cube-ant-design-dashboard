import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useAppContext } from 'context/AppContext';

const LineChart = () => {
  const appContext = useAppContext();
  const lineChart = {
    series: [
      {
        name: 'Website',
        data: [350, 40, 300, 220, 500, 250, 400, 230, 500],
        offsetY: 0
      },
      {
        name: 'Mobile App',
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        offsetY: 0
      }
    ],
    options: {
      chart: {
        width: '100%',
        toolbar: {
          show: false
        }
      },
      grid: {
        show: true,
        borderColor: '#ccc',
        strokeDashArray: 2
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct'
        ]
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val;
          }
        }
      }
    }
  };
  return (
    <ReactApexChart
      options={{
        ...(lineChart.options as unknown as ApexOptions),
        theme: { mode: appContext.mode }
      }}
      series={lineChart.series}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
