import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
import { calcPieChartData } from '../../helpers';
import { useGlobalContext } from '../../context';

const COLORS = [
  '#00b6e3',
  '#FFBB28',
  '#00e4ac',
  '#0088FE',
  '#00C49F',
  '#FF8042',
  '#dce2e2',
  '#5ec576',
  '#ffcb03',
  '#ff585f',
  '#5ec576',
  '#ff5860',
];

const PieChart = ({ clicked }) => {
  const { assets, coinInfo } = useGlobalContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(calcPieChartData(assets, coinInfo));
  }, [clicked, assets, coinInfo]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#222"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {data[index].id}
        <br /> {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RePieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </RePieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
