const getStoredJobApplication=()=>{
  const existingJobs=localStorage.getItem("jobs-application");
  if(existingJobs){
    return JSON.parse(existingJobs);
  }
  return [];
};


const savedJobApplication=(id)=>{
  const existingJob=getStoredJobApplication();
  const exist=existingJob.find(jobId=>jobId===id);
  if(!exist){
    existingJob.push(id)
    localStorage.setItem("jobs-application",JSON.stringify(existingJob))
  }
}

export{getStoredJobApplication,savedJobApplication};
