import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-40" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="text-xl flex">{company_name}</h2>
        <div className="flex gap-6">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <h2 className="flex gap-2 items-center">
            <GrLocation className="text-2xl"></GrLocation>
            {location}
          </h2>
          <h2 className="flex gap-2 items-center">
            <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
