import React from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { useAppContext } from 'context/AppContext';

const MixedChart = () => {
  const appContext = useAppContext();
  const areaChart = {
    series: [
      {
        name: 'Sales',
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500]
      }
    ],
    options: {
      chart: {
        width: '100%',
        sparkline: {
          enabled: true
        }
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
      }
    }
  };
  return (
    <ReactApexChart
      options={{
        ...(areaChart.options as unknown as ApexOptions),
        theme: { mode: appContext.mode }
      }}
      series={areaChart.series}
      type="area"
      height={50}
    />
  );
};

export default MixedChart;
