import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPeople } from '@coreui/icons';
import { Link } from 'react-router-dom';

const Dashboards1 = () => {
    const recruiters = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            companyName: 'ABC Inc.',
            educationLevel: 'Bachelor\'s Degree',
            employmentStatus: 'Yes',
            yearsOfExperience: '5',
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '987-654-3210',
            companyName: 'XYZ Corp.',
            educationLevel: 'Master\'s Degree',
            employmentStatus: 'No',
            yearsOfExperience: '8',
        },
        // Add more recruiter objects as needed
    ];
    return (
        <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">List Of Recruiters</h5>
              <Link to="/RecruiterForm" className="btn btn-primary btn-sm">
                <i className="fas fa-plus-circle"></i> Add New Recruiter
              </Link>
              </CCardHeader>
              <CCardBody>
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Education Level</th>
                        <th scope="col">Employment Status</th>
                        <th scope="col">Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {recruiters.map((recruiter, index) => (
                        <tr key={index}>
                            <td>{recruiter.name}</td>
                            <td>{recruiter.email}</td>
                            <td>{recruiter.phone}</td>
                            <td>{recruiter.companyName}</td>
                            <td>{recruiter.educationLevel}</td>
                            <td>{recruiter.employmentStatus}</td>
                            <td>{recruiter.yearsOfExperience}</td>
                        </tr>
                    ))}
                 </tbody>
                </table>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      );
    };
 
 export default Dashboards1;
