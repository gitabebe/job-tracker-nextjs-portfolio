// app/page.js
'use client'; // Required in Next.js App Router for using React hooks (useState)

import React, { useState, useEffect } from 'react';
import JobForm from '../components/JobForm';
import JobTable from '../components/JobTable';

export default function Dashboard() {
  // Use a simple array for job data (State)
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');

  // Load sample data on component mount (instead of fetching from a real API)
  useEffect(() => {
    setJobs([
      { id: 1, company: 'Google', title: 'Front-end Engineer', status: 'Applied', date: '2025-11-01', link: 'https://example.com' },
      { id: 2, company: 'Upwork Client', title: 'Next.js Developer', status: 'Interviewing', date: '2025-11-15', link: 'https://example.com' },
      { id: 3, company: 'DesignBridge', title: 'React UI Specialist', status: 'Offer', date: '2025-11-18', link: 'https://example.com' },
    ]);
  }, []);

  const handleAddJob = (newJob) => {
    // Add the new job to the beginning of the list
    setJobs([newJob, ...jobs]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Logic to filter jobs based on the selected status
  const filteredJobs = jobs
    .filter(job => filter === 'All' || job.status === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort newest first

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700">Job Tracker Dashboard</h1>
        <p className="text-gray-500 mt-2">Built with Next.js and Tailwind CSS</p>
      </header>
      
      {/* Responsive Layout Grid: 1 column on mobile, 4 columns on desktop */}
      <section className="container mx-auto px-4 md:grid md:grid-cols-4 gap-8">
        
        {/* Sidebar (Form) - Takes 1 column on desktop */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <JobForm onAddJob={handleAddJob} />
        </div>

        {/* Main Content (Table) - Takes 3 columns on desktop */}
        <div className="md:col-span-3">
          <JobTable 
            jobs={filteredJobs} 
            currentFilter={filter}
            onFilterChange={handleFilterChange}
          />
        </div>

      </section>
    </div>
  );
}