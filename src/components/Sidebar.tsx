import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PiggyBank, Target, TrendingUp, MessageSquare, Wallet, Home } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Budget', href: '/budget', icon: PiggyBank },
    { name: 'Goals', href: '/goals', icon: Target },
    { name: 'Investments', href: '/investments', icon: TrendingUp },
    { name: 'Support', href: '/support', icon: MessageSquare },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gradient-to-b from-primary to-secondary">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Wallet className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold gradient-text">FinanceAI</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      isActive
                        ? 'bg-secondary-light text-accent'
                        : 'text-gray-300 hover:bg-secondary hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
                  >
                    <Icon className="mr-3 h-6 w-6" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;