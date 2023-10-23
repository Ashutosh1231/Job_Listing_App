import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteJob, getJob } from '../../service/JobPortalService'
import './recruitment.css'
const Recruiter = () => {
  
  const [jobs,setJob] = useState([])

  useEffect(() => {
  getAllJobs();
  },[])

  const getAllJobs = () => {
    getJob().then((response) =>{
      setJob(response.data)
    }).catch(error =>{
      console.log(error);
    })
  }

  const removeJob = (jobId) => {
    deleteJob(jobId).then((response) =>{
      getAllJobs();
    }).catch(error => {
      console.log(error);
    })
  }
  
  return (
  <div>
    <div >
      <div className='header'>
      <Link to='/add-form'>
      <div >
      <div className='button-a'>Add Job</div>
      </div>
      </Link>

      <Link to='/'>
      <div>
      <div className = 'button'>Back</div>
      </div>
      </Link>
      </div>

    <table className='table'>
        <thead>
          <th>Job Id</th>
          <th>Company</th>
          <th>Email</th>
          <th>Details</th>
          <th>Salary</th>
          <th>Action</th>
        </thead>

        <tbody>
          {
          jobs.map(
            job =>
            <tr key={job.jobId}>
              <td>{job.jobId}</td>
              <td>{job.company}</td>
              <td>{job.email}</td>
              <td>{job.details}</td>
              <td>{job.salary}</td>
              <td>
              
              <button className='button-d' onClick={()=>removeJob(job.jobId)}>Delete</button>
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
  
    </div>
 </div>
  )
}

export default Recruiter