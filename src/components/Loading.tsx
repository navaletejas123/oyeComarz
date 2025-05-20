import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500" />
    </div>
  );
};

export default Loading;
