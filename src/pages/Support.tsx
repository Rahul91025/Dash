import React from 'react';
import { MessageSquare, Send, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "How does the AI-powered budget recommendation work?",
    answer: "Our AI analyzes your spending patterns, income, and financial goals to provide personalized budget recommendations. It continuously learns from your habits to suggest more accurate allocations."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we use bank-level encryption and security measures to protect your data. We never share your personal information with third parties without your explicit consent."
  },
  {
    question: "How often should I review my investment portfolio?",
    answer: "We recommend reviewing your portfolio quarterly. However, our AI monitors your investments daily and will alert you if any immediate actions are needed."
  }
];

const Support = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Support Center</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Chat with AI Assistant</h2>
            <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto space-y-4">
              <Message
                text="Hello! How can I help you with your financial planning today?"
                isAI={true}
              />
              <Message
                text="I need help with my budget planning."
                isAI={false}
              />
              <Message
                text="I'd be happy to help you create a budget plan. First, let's review your current income and expenses. What's your monthly income?"
                isAI={true}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="input flex-1"
              />
              <button className="btn btn-primary p-2">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full btn btn-secondary flex items-center justify-center">
                <HelpCircle className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="w-full btn btn-secondary flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Email Support
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = ({ text, isAI }) => (
  <div className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
    <div className={`max-w-[80%] p-3 rounded-lg ${
      isAI ? 'bg-neutral text-gray-900' : 'bg-primary text-white'
    }`}>
      <p className="text-sm">{text}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="border-b border-gray-200 pb-4">
    <h3 className="font-medium text-gray-900 mb-2">{question}</h3>
    <p className="text-sm text-gray-600">{answer}</p>
  </div>
);

export default Support;