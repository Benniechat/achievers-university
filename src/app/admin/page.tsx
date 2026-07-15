import { Users, DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, Activity } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your platform&apos;s users, courses, and finances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              18%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900">$124,500.00</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              5%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Active Students</p>
          <p className="text-2xl font-bold text-gray-900">4,289</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-red-600 flex items-center bg-red-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              2%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Active Affiliates</p>
          <p className="text-2xl font-bold text-gray-900">854</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Pending Payouts</p>
          <p className="text-2xl font-bold text-gray-900">$12,450.00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Transactions</h3>
            <button className="text-sm text-primary font-medium hover:text-primary-light transition-colors">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Student</th>
                  <th className="px-6 py-3 font-medium">Course</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Sarah Jenkins</td>
                  <td className="px-6 py-4 text-gray-500">AI Mastery</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">$99.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Michael Torres</td>
                  <td className="px-6 py-4 text-gray-500">Digital Business</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">$149.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">David Osei</td>
                  <td className="px-6 py-4 text-gray-500">AI Mastery</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">$99.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Pending Payout Requests</h3>
            <button className="text-sm text-primary font-medium hover:text-primary-light transition-colors">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Affiliate</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-6 py-4 text-gray-900">John Doe (ACH45892)</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">$450.00</td>
                  <td className="px-6 py-4">
                    <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">Process</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Emma Watson (ACH11234)</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">$225.00</td>
                  <td className="px-6 py-4">
                    <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">Process</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
