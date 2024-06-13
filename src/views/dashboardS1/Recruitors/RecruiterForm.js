import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
} from '@coreui/react';

const RecruiterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        educationLevel: '',
        employmentStatus: '',
        shortNote: '',
        yearsOfExperience: '',
        currentStatus: '',
        serviceNumber: '',
        rank: '',
        unit: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          ...(name === 'employmentStatus' && value === 'No' && { companyName: '', yearsOfExperience: '' })
        });
      };
    
      const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required.';
        tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Email is not valid.';
        tempErrors.phone = formData.phone ? '' : 'Phone number is required.';
        tempErrors.educationLevel = formData.educationLevel ? '' : 'Education level is required.';
        tempErrors.employmentStatus = formData.employmentStatus ? '' : 'Employment status is required.';
        if (formData.employmentStatus === 'Yes') {
          tempErrors.companyName = formData.companyName ? '' : 'Company name is required.';
          tempErrors.yearsOfExperience = formData.yearsOfExperience ? '' : 'Years of experience is required.';
        }
        tempErrors.shortNote = formData.shortNote ? '' : 'Short note is required.';
        if (formData.currentStatus === 'Inservice') {
          tempErrors.serviceNumber = formData.serviceNumber ? '' : 'Service number is required.';
          tempErrors.rank = formData.rank ? '' : 'Rank is required.';
          tempErrors.unit = formData.unit ? '' : 'Unit is required.';
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          console.log('Form data submitted:', formData);
        }
      };
    return (

        <CCard className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Recruitor Registration Form</h5>
        </CCardHeader>
        <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#DCDCDC' }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>
          <div className="form-group">
            <label htmlFor="currentStatus">Current Status:</label>
            <select
              className="form-control"
              id="currentStatus"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
            >
              <option value="">Select service status</option>
              <option value="Civilian">Civilian</option>
              <option value="Inservice">Inservice</option>
              <option value="Retired">Retired</option>
            </select>
          </div>
          {formData.currentStatus === 'Inservice' && (
            <>
              <div className="form-group">
                <label htmlFor="serviceNumber">Service Number:</label>
                <input
                  type="text"
                  className={`form-control ${errors.serviceNumber ? 'is-invalid' : ''}`}
                  id="serviceNumber"
                  name="serviceNumber"
                  value={formData.serviceNumber}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.serviceNumber}</div>
              </div>
              <div className="form-group">
                <label htmlFor="rank">Rank:</label>
                <input
                  type="text"
                  className={`form-control ${errors.rank ? 'is-invalid' : ''}`}
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.rank}</div>
              </div>
              <div className="form-group">
                <label htmlFor="unit">Unit:</label>
                <input
                  type="text"
                  className={`form-control ${errors.unit ? 'is-invalid' : ''}`}
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.unit}</div>
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="educationLevel">Level of Education:</label>
            <select
              className={`form-control ${errors.educationLevel ? 'is-invalid' : ''}`}
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
            >
              <option value="">Select education level</option>
              <option value="High School">High School</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctorate">Doctorate</option>
            </select>
            <div className="invalid-feedback">{errors.educationLevel}</div>
          </div>
          <div className="form-group">
            <label htmlFor="employmentStatus">Employment Status:</label>
            <select
              className={`form-control ${errors.employmentStatus ? 'is-invalid' : ''}`}
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Select employment status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="invalid-feedback">{errors.employmentStatus}</div>
          </div>
          {formData.employmentStatus === 'Yes' && (
            <>
              <div className="form-group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.companyName}</div>
              </div>
              <div className="form-group">
                <label htmlFor="yearsOfExperience">Years of Experience:</label>
                <input
                  type="number"
                  className={`form-control ${errors.yearsOfExperience ? 'is-invalid' : ''}`}
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.yearsOfExperience}</div>
              </div>
            </>
          )}

          <div style={{ gridColumn: 'span 2' }}>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
         </CCardBody>
      </CCard>
    );
};

export default RecruiterForm;