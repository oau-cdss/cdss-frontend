const UpcomingScheduleSkeletonLoader = ({ count }) => {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="bg-[#fff] shadow-sm rounded-lg p-4 animate-pulse">
            <div className="flex items-center">
              <div className="mr-2 w-9 h-9 rounded-full border border-[#6761ff] flex items-center justify-center bg-gray-300"></div>
              <div className="w-full ml-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-col w-full">
                    <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
                    <div className="flex justify-between w-full">
                      <div className="h-3 bg-gray-300 animate-pulse rounded w-1/2"></div>
                     
                    </div>
                  </div>
                  <div className="h-4 bg-gray-300 animate-pulse rounded w-1/4 ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default UpcomingScheduleSkeletonLoader;
  