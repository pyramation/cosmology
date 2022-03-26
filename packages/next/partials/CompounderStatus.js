import React, { Component } from 'react';
import axios from 'axios';
import Job from '../src/components/subComponents/Job';

const Dashboard = ({ jobs }) => {
  function handleRun() {
    // driver.executejobs(jobs);
  }

  return (
    <div>
      <div className="horiz" style={{ marginBottom: 16 }}>
        <h3 className="main-text">Pending Jobs</h3>
        <button
          className="action-button"
          onClick={handleRun}
          style={{
            flex: 0,
            marginLeft: 'auto',
            height: 26,
            padding: '2px 16px',
            fontSize: 14
          }}
        >
          Run
        </button>
      </div>
      {jobs.map((job) => {
        const jobDetails = job.job;
        return <Job job={job} />;
      })}

      {/* <div className="grid-item" style={{ display: "flex", flex: 1 }}>
                  <button
                      className="action-button"
                      style={{ flex: 1, height: 60 }}
                      onClick={() => triggerSwapsPreview()}
                  >
                      Run
                  </button>
              </div> */}
    </div>
  );
};

export default Dashboard;
