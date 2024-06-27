import React from 'react';

const QuizSkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-6 w-full max-w-xl mx-auto">
      <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>


      <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
    </div>
  );
};

export default QuizSkeletonLoader;
