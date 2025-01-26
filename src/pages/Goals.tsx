import React from 'react';
import { Target, TrendingUp, Calendar } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: 'Emergency Fund',
    target: 10000,
    current: 8000,
    deadline: '2024-12-31',
    category: 'Savings',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Vacation Fund',
    target: 5000,
    current: 2500,
    deadline: '2024-08-15',
    category: 'Travel',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'New Car',
    target: 25000,
    current: 15000,
    deadline: '2025-06-30',
    category: 'Purchase',
    priority: 'Medium',
  },
];

const Goals = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Financial Goals</h1>
        <button className="btn btn-primary">Create New Goal</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">AI Goal Insights</h2>
        <div className="space-y-4">
          <InsightCard
            title="On Track: Emergency Fund"
            description="You're consistently saving towards your emergency fund. At this rate, you'll reach your goal 2 months ahead of schedule."
            type="success"
          />
          <InsightCard
            title="Action Needed: Vacation Fund"
            description="To reach your vacation fund goal by August, consider increasing monthly contributions by $200."
            type="warning"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Goal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deadline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{goal.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{goal.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    ${goal.current} of ${goal.target}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{goal.deadline}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    goal.priority === 'High'
                      ? 'bg-red-100 text-red-800'
                      : goal.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {goal.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GoalCard = ({ goal }) => {
  const progress = (goal.current / goal.target) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
        <Target className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center text-gray-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>${goal.current} saved</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{goal.deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightCard = ({ title, description, type }) => (
  <div className={`p-4 rounded-md ${
    type === 'success' ? 'bg-green-50' : 'bg-yellow-50'
  }`}>
    <h3 className={`font-medium ${
      type === 'success' ? 'text-green-800' : 'text-yellow-800'
    }`}>{title}</h3>
    <p className={`mt-1 text-sm ${
      type === 'success' ? 'text-green-700' : 'text-yellow-700'
    }`}>{description}</p>
  </div>
);

export default Goals;