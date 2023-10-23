import axios from 'axios';


const url = "http://localhost:8080/api/v1/job";

  
  export const  getJob = () => {
    return axios.get(url); 
  }

  export const createJob = (job) => {
    return axios.post(url,job);
  }

  export const getJobById = (jobId) => {
    return axios.get(url+'/'+jobId);
  }

  export const deleteJob = (jobId) => {
    return axios.delete(url+'/'+jobId);
  }


