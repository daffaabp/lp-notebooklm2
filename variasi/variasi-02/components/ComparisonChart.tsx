import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Metode Lama', hours: 40, label: '40 Jam' },
  { name: 'Metode AI', hours: 4, label: '4 Jam' },
];

const ComparisonChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full max-w-lg mx-auto mt-8">
      <h3 className="text-center text-lg font-bold text-gray-700 mb-4">Waktu Membedah 50 Jurnal</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12, fontWeight: 600}} />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              formatter={(value: number) => [`${value} Jam`, 'Waktu']}
            />
            <Bar dataKey="hours" radius={[0, 4, 4, 0]} barSize={40}>
               {data.map((entry, index) => (
                  // Index 0: Danger (Rose), Index 1: Success (Emerald)
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#be123c' : '#059669'} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">Hemat waktu hingga 90% dengan strategi NotebookLM</p>
    </div>
  );
};

export default ComparisonChart;