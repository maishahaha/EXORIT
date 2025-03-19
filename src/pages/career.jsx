import React, { useState, useEffect } from 'react';
// ...existing code...

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch job listings');
        }
        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // ...existing code...

  return (
    <div className="career-page-container">
      <h1 className="page-title">Career Opportunities</h1>
      
      {isLoading && <div className="loading">Loading job listings...</div>}
      
      {error && <div className="error-message">{error}</div>}
      
      {!isLoading && !error && jobs.length === 0 && (
        <div className="no-jobs-message">
          No job openings available at the moment. Please check back later.
        </div>
      )}
      
      {!isLoading && !error && jobs.length > 0 && (
        <div className="job-listings">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-location">{job.location}</p>
              <p className="job-type">{job.type}</p>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Career;
