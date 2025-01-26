import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ChevronRight, Send, X } from 'lucide-react';

const features = [
  {
    title: 'Smart Financial Analysis',
    description: 'AI-powered insights to help you make better financial decisions',
    link: '/dashboard',
  },
  {
    title: 'Budget Management',
    description: 'Track and optimize your spending with intelligent budgeting tools',
    link: '/budget',
  },
  {
    title: 'Goal Setting',
    description: 'Set and achieve your financial goals with AI-guided planning',
    link: '/goals',
  },
  {
    title: 'Investment Tracking',
    description: 'Monitor and optimize your investment portfolio',
    link: '/investments',
  },
  {
    title: '24/7 Support',
    description: 'Get help anytime with our AI-powered support system',
    link: '/support',
  },
];

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your finances today?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages([...messages, { text: inputMessage, isBot: false }]);
    setInputMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm here to help! Please let me know what specific financial information you're looking for.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-linear from-primary via-secondary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            Your AI Financial Advisor
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Make smarter financial decisions with AI-powered insights
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-accent text-primary rounded-full font-semibold hover:bg-accent-light transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group p-6 bg-gradient-to-br from-secondary to-primary rounded-lg hover:from-primary hover:to-secondary transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                {feature.title}
                <ChevronRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-accent hover:bg-accent-light text-primary rounded-full p-4 shadow-lg transition-colors"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}

        {isChatOpen && (
          <div className="bg-white rounded-lg shadow-xl w-96">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-gray-800">Financial Assistant</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-primary text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;