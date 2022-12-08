import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 300 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#69E6A6', '#0DBBFC', '#0A2640'];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={500} height={320} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={170}
          cy={150}
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
