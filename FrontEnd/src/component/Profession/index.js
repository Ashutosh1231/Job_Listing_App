import React from 'react'
import { Link } from 'react-router-dom'
import './profession.css'
const index = () => {
  return (
    <div className = 'button-container'>
       <div className='button-two'>
            <Link to='/job-seeker'>
            <div className='left'>
                Job Seeker
            </div>
            </Link>

            <Link to='/recruitment'>
            <div className='right'>
                Recruiter
            </div>
            </Link>
       </div>
    </div>
  )
}

export default index