import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createJob } from '../../service/JobPortalService'
import './add-form.css'


const AddForm = () => {
  
  const[company, setCompany] = useState('')
  const[email, setEmail] = useState('')
  const[details, setDetails] = useState('')
  const[salary, setSalary] = useState(0)
  const navigate = useNavigate();
  

  const saveOrUpdateJob = (e) => {
    e.preventDefault();
    const job = {company, email, details, salary}
      createJob(job).then((response)=>{
        navigate('/recruitment')
      }).catch(error =>{
        console.log(error)
      })   
  }


 
  return (
    <div>
      <div className = 'container'>
         <div>
             <div>
                  <div className='title'>Add Job</div>
                
                 <div >
                     <form>
                         <div className = 'form-item'>
                             <label> Company Name :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter company name"
                                 name = "companyName"
                                 
                                 value = {company}
                                 onChange = {(e) => setCompany(e.target.value)}
                             >
                             </input>
                         </div>

                         <div className = 'form-item'>
                             <label> Email :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter email"
                                 name = "email"
                                 
                                 value = {email}
                                 onChange = {(e) => setEmail(e.target.value)}
                             >
                             </input>
                         </div>

                         <div className = 'form-item'>
                             <label > Details :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter details"
                                 name = "detail"
                                
                                 value = {details}
                                 onChange = {(e) => setDetails(e.target.value)}
                             >
                             </input>
                         </div>

                         <div className ='form-item'>
                             <label > Salary :</label>
                             <input
                                 type = "number"
                                 placeholder = "Enter salary"
                                 name = "salary"
                                 
                                 value = {salary}
                                 onChange = {(e) => setSalary(e.target.value)}
                             >
                             </input>
                         </div>
                        <div className='button-side'>
                            <button className = 'form-add-buttom' 
                            disabled={company==='' || email==='' || details==='' || salary===0? true : false} 
                            onClick = {(e) => saveOrUpdateJob(e)} >Submit </button>
                            <Link to="/recruitment" className='cancel-button'> Cancel </Link> 
                        </div>
                         
                     </form>

                 </div>
             </div>
         </div>

    </div>
    </div>
  )
}

export default AddForm