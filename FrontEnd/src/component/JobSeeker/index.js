import {getJob} from '../../service/JobPortalService'
import './jobSeeker.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const JobSeeker = () => {
  
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
  const handleClick = () =>{
    alert('Applied sucessfully')
  }

  return (
    <div>
      
      <div className='header'>
        <div>
        <div className = 'head'>Job's Available</div>
        </div>
        <Link to='/'>
        <div>
          <div className = 'head-back'>Back</div>
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
          <th>Apply</th>
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
              <td><button className='button-apply' onClick={handleClick}>Apply</button></td>
            </tr>
          )
          }
        </tbody>

      </table>
    </div>
  )
}

export default JobSeeker