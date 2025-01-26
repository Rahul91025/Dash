import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Plus, AlertCircle } from 'lucide-react';

const data = [
  { name: 'Housing', value: 1500, color: '#1a365d' },
  { name: 'Transportation', value: 400, color: '#2a4a7f' },
  { name: 'Food', value: 600, color: '#c4a052' },
  { name: 'Utilities', value: 300, color: '#d4b062' },
  { name: 'Entertainment', value: 200, color: '#b49042' },
  { name: 'Other', value: 300, color: '#0f2444' },
];

const Budget = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Budget Planner</h1>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Budget Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Budget Alerts</h2>
          <div className="space-y-4">
            <Alert
              category="Food"
              message="You've spent 80% of your monthly food budget"
              type="warning"
            />
            <Alert
              category="Entertainment"
              message="Entertainment budget exceeded by $50"
              type="danger"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budgeted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remaining
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((category) => (
              <tr key={category.name}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{category.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${category.value}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${Math.floor(category.value * 0.7)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${Math.floor(category.value * 0.3)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Alert = ({ category, message, type }) => (
  <div className={`p-4 rounded-md ${type === 'warning' ? 'bg-yellow-50' : 'bg-red-50'}`}>
    <div className="flex">
      <div className="flex-shrink-0">
        <AlertCircle className={`h-5 w-5 ${type === 'warning' ? 'text-yellow-400' : 'text-red-400'}`} />
      </div>
      <div className="ml-3">
        <h3 className={`text-sm font-medium ${type === 'warning' ? 'text-yellow-800' : 'text-red-800'}`}>
          {category}
        </h3>
        <div className={`mt-2 text-sm ${type === 'warning' ? 'text-yellow-700' : 'text-red-700'}`}>
          {message}
        </div>
      </div>
    </div>
  </div>
);

export default Budget;