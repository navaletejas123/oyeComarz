import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the message submission here
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden transform transition-all duration-300 ease-in-out">
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Shopify Support</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-100 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-72 overflow-y-auto">
            <div className="bg-orange-100 rounded-lg p-3 text-gray-800 inline-block max-w-xs mb-4">
              <p>Got Shopify questions? Let's get you the answers you need!</p>
            </div>
            {/* This is where chat messages would appear */}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button 
                type="submit" 
                className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors focus:outline-none"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;