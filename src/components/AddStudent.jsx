import React from 'react'
import { NavBar } from './NavBar'

export const AddStudent = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1><center>ADD STUDENT DETAILS</center></h1>
      <div className="containe">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Adm no</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Roll no</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Parent Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">College</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">DOB</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">confirm password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <br /><button className="btn btn-success">Add Student</button>
            </div>
           </div>    
           </div>
           </div>
           </div>
           </div>
  )
}
