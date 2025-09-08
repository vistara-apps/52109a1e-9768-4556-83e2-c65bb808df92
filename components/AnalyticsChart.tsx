'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatPercentage } from '@/lib/utils';

interface AnalyticsChartProps {
  variant: 'line' | 'bar';
  data: any[];
  dataKey: string;
  title: string;
  color?: string;
}

export function AnalyticsChart({
  variant,
  data,
  dataKey,
  title,
  color = '#00D4AA'
}: AnalyticsChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const formattedValue = dataKey.includes('volume') || dataKey.includes('fees')
        ? formatCurrency(value)
        : dataKey.includes('slippage')
        ? formatPercentage(value)
        : value.toLocaleString();

      return (
        <div className="glass-card p-3 border border-white border-opacity-20">
          <p className="text-textSecondary text-sm">{label}</p>
          <p className="text-textPrimary font-medium">
            {title}: {formattedValue}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="metric-card">
      <h3 className="text-heading mb-4">{title}</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="date" 
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="date" 
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={dataKey}
                fill={color}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
