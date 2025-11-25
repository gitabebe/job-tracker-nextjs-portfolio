// components/JobTable.js

import React from 'react';

const JobTable = ({ jobs, currentFilter, onFilterChange }) => {
  // Function to determine badge color based on status (Tailwind Utility)
  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied': return 'bg-blue-100 text-blue-800';
      case 'Interviewing': return 'bg-yellow-100 text-yellow-800';
      case 'Offer': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const statusOptions = ['All', 'Applied', 'Interviewing', 'Rejected', 'Offer'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Applications Log ({jobs.length})</h2>

      {/* Filter Component */}
      <div className="mb-4 flex items-center space-x-3">
        <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
        <select
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-sm"
        >
          {statusOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Main Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Company
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Title
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Status
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Date
            </th>
            <th className="px-4 py-2"></th> {/* For Link */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                No applications logged yet.
              </td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr key={job.id} className="hover:bg-indigo-50 transition duration-150">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {job.company}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {job.title}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {job.date}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
                      View
                    </a>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;