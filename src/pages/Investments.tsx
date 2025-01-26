import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, DollarSign } from 'lucide-react';

const portfolioData = [
  { date: '2023-07', value: 10000 },
  { date: '2023-08', value: 10800 },
  { date: '2023-09', value: 10600 },
  { date: '2023-10', value: 11200 },
  { date: '2023-11', value: 12000 },
  { date: '2023-12', value: 12500 },
];

const holdings = [
  { name: 'S&P 500 ETF', allocation: 40, value: 5000, change: 8.5 },
  { name: 'Total Bond ETF', allocation: 30, value: 3750, change: -2.1 },
  { name: 'International ETF', allocation: 20, value: 2500, change: 5.2 },
  { name: 'Real Estate ETF', allocation: 10, value: 1250, change: 3.8 },
];

const Investments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Investment Portfolio</h1>
        <button className="btn btn-primary">Rebalance Portfolio</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Portfolio"
          value="$12,500"
          change="+25%"
          isPositive={true}
        />
        <StatCard
          title="Monthly Return"
          value="$500"
          change="+4.2%"
          isPositive={true}
        />
        <StatCard
          title="Dividend Yield"
          value="2.1%"
          change="+0.3%"
          isPositive={true}
        />
        <StatCard
          title="Risk Score"
          value="65/100"
          change="-5"
          isPositive={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={portfolioData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1a365d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
          <div className="space-y-4">
            <RecommendationCard
              title="Portfolio Rebalancing"
              description="Your international allocation is below target. Consider increasing by 5%."
              type="warning"
            />
            <RecommendationCard
              title="Tax-Loss Harvesting"
              description="Opportunity to harvest $300 in losses from bond holdings."
              type="info"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Holding
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Allocation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Performance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holdings.map((holding) => (
              <tr key={holding.name}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{holding.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{holding.allocation}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${holding.value}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center text-sm ${
                    holding.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {holding.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    {holding.change}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
        <DollarSign className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
      </div>
    </div>
    <div className="flex items-center mt-4">
      {isPositive ? (
        <TrendingUp className="h-4 w-4 text-green-500" />
      ) : (
        <TrendingDown className="h-4 w-4 text-red-500" />
      )}
      <span className={`ml-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
  </div>
);

const RecommendationCard = ({ title, description, type }) => (
  <div className={`p-4 rounded-md ${
    type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'
  }`}>
    <div className="flex">
      <div className="flex-shrink-0">
        <AlertCircle className={`h-5 w-5 ${
          type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
        }`} />
      </div>
      <div className="ml-3">
        <h3 className={`text-sm font-medium ${
          type === 'warning' ? 'text-yellow-800' : 'text-blue-800'
        }`}>
          {title}
        </h3>
        <div className={`mt-2 text-sm ${
          type === 'warning' ? 'text-yellow-700' : 'text-blue-700'
        }`}>
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default Investments;