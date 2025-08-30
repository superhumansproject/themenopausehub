import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with questions about our menopause support platform. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    "What's included in Premium?",
    "How much does membership cost?",
    "Can I cancel anytime?",
    "Is there a free trial?",
    "How do I join the community?"
  ];

  const botResponses: { [key: string]: string } = {
    "premium": "Premium membership includes: Interactive Self-Help Library with AI search, exclusive video masterclasses, private community forums, personalized tracking, monthly live Q&A sessions, meal plans, workout routines, and priority support. All for $29/month with a 7-day free trial!",
    "cost": "Our Premium membership is $29/month with no setup fees. You can start with a 7-day free trial and cancel anytime. We also offer annual plans with significant savings!",
    "cancel": "Yes! You can cancel your membership anytime with no penalties or fees. Your access continues until the end of your current billing period, and you can always rejoin later.",
    "trial": "Absolutely! We offer a 7-day free trial for new Premium members. You'll get full access to all features during the trial period. No credit card required to start!",
    "community": "Joining our community is easy! Premium members get instant access to our private forums with categories like Symptom Management, Nutrition, Fitness, and Emotional Wellness. Simply sign up and start connecting!",
    "default": "I'd be happy to help! You can ask me about Premium membership benefits, pricing, our community features, free resources, or anything else about our menopause support platform."
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for bot response
    const lowerInput = inputText.toLowerCase();
    let responseKey = 'default';
    
    if (lowerInput.includes('premium') || lowerInput.includes('membership')) responseKey = 'premium';
    else if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('much')) responseKey = 'cost';
    else if (lowerInput.includes('cancel') || lowerInput.includes('quit')) responseKey = 'cancel';
    else if (lowerInput.includes('trial') || lowerInput.includes('free')) responseKey = 'trial';
    else if (lowerInput.includes('community') || lowerInput.includes('forum')) responseKey = 'community';

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[responseKey],
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Menopause Support</h3>
                <p className="text-sm opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-red-600 text-white'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-0.5 flex-shrink-0" />}
                    {!message.isBot && <User size={16} className="mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;