import React from 'react';

const IndexBar = () => {
    return (
      <div className="bg-dark-blue text-white py-4 px-8 m-0 mt-2 p-5 h-40 items-center justify-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-2xl font-bold text-pink-600">1234</div>
            <div className="mt-2">Sales and Counting</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-200">5678</div>
            <div className="mt-2">Reviews & Feedbacks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-300">91011</div>
            <div className="mt-2">Active Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-500">1213</div>
            <div className="mt-2">App Downloads</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default IndexBar;
  