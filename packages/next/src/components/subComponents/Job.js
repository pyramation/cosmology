import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const Jobs = ({ driver, job }) => {

  /**
   *
   * @param {('queued'|'running'|'success'|'failed')} status
   */
  function getColor(status) {
    if (status === "queued") return "#333";
    if (status === "running") return "yellow";
    if (status === "success") return "green";
    if (status === "failed") return "red";
  }

  return (
    <div className="job-container">
      <div
        className="job-status-indicator"
        style={{ backgroundColor: getColor(job.status) }}
      />
      <p className="detail-text">{job.text}</p>
      <p
        className="main-text"
        style={{
          fontSize: 12,
          opacity: 0.5,
          textTransform: "uppercase",
          marginLeft: "auto",
        }}
      >
        {job.type}
      </p>
    </div>
  );
};

export default Jobs;
