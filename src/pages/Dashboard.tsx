import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Percent, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', spending: 4000 },
  { name: 'Feb', spending: 3000 },
  { name: 'Mar', spending: 2000 },
  { name: 'Apr', spending: 2780 },
  { name: 'May', spending: 1890 },
  { name: 'Jun', spending: 2390 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Balance"
          value="$24,563.00"
          change="+2.5%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="Monthly Spending"
          value="$3,242.00"
          change="-0.8%"
          isPositive={false}
          icon={DollarSign}
        />
        <StatCard
          title="Savings Rate"
          value="18.2%"
          change="+1.2%"
          isPositive={true}
          icon={Percent}
        />
        <StatCard
          title="Investment Returns"
          value="$1,826.00"
          change="+12.3%"
          isPositive={true}
          icon={TrendingUp}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Spending Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="spending" fill="#1a365d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
          <div className="space-y-4">
            <InsightCard
              title="Unusual Spending"
              description="Your restaurant spending is 40% higher than last month. Consider adjusting your dining budget."
            />
            <InsightCard
              title="Savings Opportunity"
              description="Based on your income patterns, you could increase your monthly savings by $300."
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Goals Progress</h2>
          <div className="space-y-4">
            <GoalCard
              title="Emergency Fund"
              current={8000}
              target={10000}
              percentage={80}
            />
            <GoalCard
              title="Vacation Savings"
              current={2500}
              target={5000}
              percentage={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
        <Icon className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
      </div>
    </div>
    <div className="flex items-center mt-4">
      {isPositive ? (
        <ArrowUpRight className="h-4 w-4 text-green-500" />
      ) : (
        <ArrowDownRight className="h-4 w-4 text-red-500" />
      )}
      <span className={`ml-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
  </div>
);

const InsightCard = ({ title, description }) => (
  <div className="border-l-4 border-primary p-4 bg-neutral">
    <h3 className="font-medium text-primary">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
  </div>
);

const GoalCard = ({ title, current, target, percentage }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium">{title}</span>
      <span className="text-sm text-gray-500">${current} / ${target}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-primary rounded-full h-2"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default Dashboard;