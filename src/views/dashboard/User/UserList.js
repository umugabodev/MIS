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
    const [users, setUsers] = useState([
        { id: 1, firstName: 'Olivier', lastName: 'RWAMUCYO', email: 'rwamu@example.com', phoneNumber: '0784960500', role: 'BDEAdmin', active: true },
        { id: 2, firstName: 'Damascene', lastName: 'HABONA', email: 'habona@example.com', phoneNumber: '0784960500', role: 'S2', active: true },
        { id: 3, firstName: 'Theogene', lastName: 'KALISA', email: 'kalisa@example.com', phoneNumber: '0784960500', role: 'S1', active: false },
        { id:4, firstName: 'Nicolas', lastName: 'MANZI', email: 'manzi@example.com', phoneNumber: '0784960500', role: 'Admin', active: true },
        { id: 5, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phoneNumber: '0784960500',role: 'STAFF', active: false },
        // Add more users here...
      ]);
    
      const toggleActive = (id) => {
        setUsers(users.map(user => {
          if (user.id === id) {
            return { ...user, active: !user.active };
          }
          return user;
        }));
      };
    
      const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
      };
    
      const handleUpdate = (id) => {
        // Perform the update action here, e.g., redirect to an update page
        console.log(`Update user with id ${id}`);
      };
    
      return (
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">List Of Users</h5>
                <Link to="/RegistrationForm" className="btn btn-primary btn-sm">
                  <i className="fas fa-plus-circle"></i> Add New User
                </Link>
              </CCardHeader>
              <CCardBody>
                <table className="table table-bordered table-hover">
                  <thead className="bg-body-secondary">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.role}</td>
                        <td>
                          <CButton className={user.active ? "btn-success" : "btn-secondary"} size="sm" onClick={() => toggleActive(user.id)}>
                            {user.active ? "Active" : "Inactive"}
                          </CButton>
                          <CButton className="btn-info" size="sm" onClick={() => handleUpdate(user.id)}>Update</CButton>
                          <CButton className="btn-danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</CButton>
                        </td>
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
