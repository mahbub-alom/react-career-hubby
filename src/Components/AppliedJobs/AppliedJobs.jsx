import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import ApplyJobs from "../ApplyJobs/ApplyJobs";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const storedApplication = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedApplication) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Applied Jobs:{appliedJobs.length}</h2>
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={()=>handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={()=>handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((apply) => (
          <ApplyJobs key={apply.id} apply={apply}></ApplyJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
