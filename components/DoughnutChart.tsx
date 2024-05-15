'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: {
    name: string;
    balance: number;
  }[];
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: accounts.map((account) => account.balance),
        backgroundColor: ['#0747b6','#2265d8', '#2f91fa']
      }
    ],
    labels: accounts.map((account) => account.name)
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '75%',
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  );
};

export default DoughnutChart;