import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
      try {
        const response = await fetch(`http://localhost:3007/api/v1/users?page=${page}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const result = await response.json();
          if (result.status === "Successful") {
            setUsers(result.data.content); // Assuming the users are in the 'content' field of the Page object
            setTotalPages(result.data.totalPages);
          } else {
            setError(result.message);
          }
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, [page]);

  const toggleActive = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, active: !user.active };
      }
      return user;
    }));
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
    try {
      const response = await fetch(`http://localhost:3007/api/v1/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update user with id ${id}`);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
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
            {error && <div className="alert alert-danger">{error}</div>}
            <CTable bordered hover>
              <CTableHead className="bg-body-secondary">
                <CTableRow>
                  <CTableHeaderCell>First Name</CTableHeaderCell>
                  <CTableHeaderCell>Last Name</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>Phone Number</CTableHeaderCell>
                  <CTableHeaderCell>Role</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {users.map(user => (
                  <CTableRow key={user.id}>
                    <CTableHeaderCell>{user.firstName}</CTableHeaderCell>
                    <CTableHeaderCell>{user.lastName}</CTableHeaderCell>
                    <CTableHeaderCell>{user.username}</CTableHeaderCell>
                    <CTableHeaderCell>{user.phoneNumber}</CTableHeaderCell>
                    <CTableHeaderCell>{user.roles[0].name}</CTableHeaderCell>
                    <CTableHeaderCell>
                      <CButton className={user.active ? "btn-success" : "btn-secondary"} size="sm" onClick={() => toggleActive(user.id)}>
                        {user.active ? "Active" : "Inactive"}
                      </CButton>
                      <CButton className="btn-info" size="sm" onClick={() => handleUpdate(user.id)}>Update</CButton>
                      <CButton className="btn-danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</CButton>
                    </CTableHeaderCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
                Previous
              </button>
              <button className="btn btn-primary" onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages - 1}>
                Next
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Userlist;
