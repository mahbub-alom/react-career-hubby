import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const ApplyJobs = ({ apply }) => {
  const {
    logo,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = apply;
  return (
    <div>
      <div className="flex m-5 border rounded border-gray-500 p-5 gap-4 items-center">
        <img className="w-36" src={logo} alt="" />
        <div className="space-y-3 flex-grow">
          <h2 className="card-title">{job_title}</h2>
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
        </div>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default ApplyJobs;
