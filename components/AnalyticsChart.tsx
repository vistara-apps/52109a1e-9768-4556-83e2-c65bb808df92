'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';

interface AnalyticsChartProps {
  variant: 'bar' | 'line';
  data: any[];
  dataKey: string;
  xAxisKey: string;
  title: string;
  color?: string;
}

export function AnalyticsChart({
  variant,
  data,
  dataKey,
  xAxisKey,
  title,
  color = '#00D4AA'
}: AnalyticsChartProps) {
  const ChartComponent = variant === 'bar' ? BarChart : LineChart;
  const DataComponent = variant === 'bar' ? Bar : Line;

  return (
    <div className="glass-card p-4">
      <h3 className="text-heading mb-4">{title}</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey={xAxisKey} 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            {variant === 'bar' ? (
              <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
            ) : (
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                strokeWidth={2}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
              />
            )}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
