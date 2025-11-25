// components/JobForm.js
import React, { useState } from 'react';

const JobForm = ({ onAddJob }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    status: 'Applied',
    date: new Date().toISOString().split('T')[0], // Default to today
    link: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.title) {
      alert("Company and Title are required!");
      return;
    }
    // Pass the new job data up to the parent component (app/page.js)
    onAddJob({ ...formData, id: Date.now() }); 
    
    // Reset form after submission
    setFormData({
        company: '',
        title: '',
        status: 'Applied',
        date: new Date().toISOString().split('T')[0],
        link: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Log New Job Application</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Application Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        {/* Date Applied */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date Applied</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Job Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition duration-200"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;