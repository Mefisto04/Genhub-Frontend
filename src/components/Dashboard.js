import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isAdmin = user?.role === 'admin';
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Welcome, {user?.name || 'User'}! 
          {isAdmin && <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">Admin</span>}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Recent Activity</h3>
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Quick Actions</h3>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-purple-800">
              New Diagnosis
            </button>
          </div>
        </div>
        
        {/* Admin-only section */}
        {isAdmin && (
          <div className="mt-8 p-6 rounded-lg shadow-md border border-violet-900">
            <h2 className="text-2xl font-bold mb-4">Admin Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-md shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">User Management</h3>
                <p className="text-gray-600 mb-2">Manage user accounts and permissions</p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View Users
                </button>
              </div>
              <div className="p-4 bg-white rounded-md shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">System Analytics</h3>
                <p className="text-gray-600 mb-2">View system statistics and usage data</p>
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 