import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { CiCalendar, CiLocationOn, CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idNum = parseInt(id);
  const job = jobs.find((job) => job.id === idNum);

  const handleApplyJob=()=>{
    savedJobApplication(idNum)
    toast("Your Job Apply Successfully")
  }


  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" md:col-span-3">
          <h2 className="mb-2">
            <span className="font-bold">Job Description</span>{" "}
            {job.job_description}
          </h2>
          <h2>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </h2>
          <h2>
            <span className="font-bold">Educational Requirements: </span>{" "}
            {job.educational_requirements}
          </h2>
          <h2>
            <span className="font-bold">Experience</span> {job.experiences}
          </h2>
        </div>
        <div className="bg-[#bcc3ef] text-black p-4">
          <h1 className="mb-4 font-bold">Job Details:</h1>
          <hr />
          <div>
            <h2 className="flex items-center my-2 gap-2">
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
              {job.salary}
            </h2>
            <h2 className="flex items-center my-2 gap-2">
              <CiCalendar></CiCalendar>
              {job.job_title}
            </h2>
          </div>
          <h1 className="mb-4 font-bold">Contact Information:</h1>
          <hr />
          <h2 className="flex items-center my-2 gap-2">
            <span className="font-bold flex items-center gap-1">
              <IoCall></IoCall>Phone:
            </span>
            {job.contact_information.phone}
          </h2>
          <h2 className="flex items-center my-2 gap-2">
            <span className="font-bold flex items-center gap-1">
              <CiMail></CiMail>Email:
            </span>
            {job.contact_information.email}
          </h2>
          <h2 className="flex items-center my-2 gap-2">
            <span className="font-bold flex items-center gap-1">
              <CiLocationOn></CiLocationOn>Address:
            </span>
            {job.contact_information.address}
          </h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;
