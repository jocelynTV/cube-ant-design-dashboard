import React, { useState } from 'react';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import AreaChart from './charts/AreaChart';
import DonutChart from './charts/DonutChart';
import { Badge } from 'antd';

const { Statistic } = StatisticCard;

const DashboardSale = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 768);
      }}
    >
      <ProCard split={responsive ? 'horizontal' : 'vertical'}>
        <StatisticCard
          colSpan={responsive ? 24 : 6}
          title="Order Overview"
          statistic={{
            value: 6556.55,
            prefix: '$',
            description: (
              <Statistic title="this month" value="3.2%" trend="up" />
            )
          }}
          chart={<DonutChart />}
          footer={
            <>
              <Statistic
                prefix="$"
                className="stat-sub"
                value={67600}
                title={
                  <>
                    <Badge color="pink" text="Income" />
                  </>
                }
                layout="horizontal"
              />
              <Statistic
                prefix="$"
                className="stat-sub"
                value={12600}
                title={
                  <>
                    <Badge color="green" text="Completed" />
                  </>
                }
                layout="horizontal"
              />
              <Statistic
                prefix="$"
                className="stat-sub"
                value={14300}
                title={
                  <>
                    <Badge color="orange" text="Pending" />
                  </>
                }
                layout="horizontal"
              />
            </>
          }
        />
        <StatisticCard.Group
          colSpan={responsive ? 24 : 18}
          direction={responsive ? 'column' : undefined}
        >
          <StatisticCard
            statistic={{
              title: 'Yesterday Orders',
              value: 55300,
              prefix: '$',
              description: (
                <Statistic
                  className="stat-sub"
                  suffix="%"
                  title="June 08, 2021"
                  value={6.15}
                  trend="up"
                />
              )
            }}
            chart={<AreaChart />}
          />
          <StatisticCard
            statistic={{
              title: 'This Month',
              value: 269994,
              prefix: '$',
              description: (
                <Statistic
                  className="stat-sub"
                  suffix="%"
                  title="May 01, 2021"
                  value={5.87}
                  trend="down"
                />
              )
            }}
            chart={<AreaChart />}
          />
          <StatisticCard
            statistic={{
              title: 'Last Month',
              value: 187600.45,
              prefix: '$',
              description: (
                <Statistic
                  className="stat-sub"
                  suffix="%"
                  title="Feb 16, 2021"
                  value={3.85}
                  trend="down"
                />
              )
            }}
            chart={<AreaChart />}
          />
        </StatisticCard.Group>
      </ProCard>
    </RcResizeObserver>
  );
};

export default DashboardSale;
