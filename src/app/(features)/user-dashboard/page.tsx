// UserDashboard.tsx
import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-5 p-3 rounded-lg ">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Welcome back, User 👋</h1>
        <div className="flex items-center space-x-4">
          <img
            src="/next.svg"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Total Orders</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Earnings</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">
              $999995,678
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Active Users</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">890</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Date</th>
                <th className="p-3">Description</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">2025-09-10</td>
                <td className="p-3">Order #1234</td>
                <td className="p-3 text-green-600">+$120</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3">2025-09-09</td>
                <td className="p-3">Subscription</td>
                <td className="p-3 text-red-600">- $15</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-3">2025-09-08</td>
                <td className="p-3">Refund</td>
                <td className="p-3 text-green-600">+$50</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
