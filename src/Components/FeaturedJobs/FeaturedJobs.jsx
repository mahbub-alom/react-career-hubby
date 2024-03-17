import axios from "axios";
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    // fetch("jobs.json")
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    axios.get("jobs.json").then((data) => setJobs(data.data));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-5xl">Featured Jobs</h1>
      <p className="text-2xl">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.slice(0,dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className={dataLength===jobs.length?"hidden":"my-4"}>
        <button 
        onClick={()=>setDataLength(jobs.length)}
        className="btn btn-primary">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
