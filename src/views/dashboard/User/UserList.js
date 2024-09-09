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
import API_BASE_URL from '../../../config';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('accessToken');
      try {
        const response = await fetch(`${API_BASE_URL}/users?page=${page}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const result = await response.json();
          if (result.status === "Successful") {
            setUsers(result.data.content);
            setTotalPages(result.data.totalPages);
          } else {
            setError(result.message || 'Unknown error');
          }
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError('Error fetching users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [page]); // Ensure useEffect runs when page changes

  const toggleActive = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, active: !user.active };
      }
      return user;
    }));
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
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
        setError(`Failed to delete user: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError(`Error deleting user: ${error.message}`);
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
            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : (
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
                      <CTableHeaderCell>{user.roles[0]?.name}</CTableHeaderCell>
                      <CTableHeaderCell>
                        <CButton className={user.active ? "btn btn-success" : "btn btn-secondary"} size="sm" onClick={() => toggleActive(user.id)}>
                          {user.active ? "Active" : "Inactive"}
                        </CButton>
                        <CButton className="btn btn-info" size="sm" onClick={() => handleUpdate(user.id)}>Update</CButton>
                        <CButton className="btn btn-danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</CButton>
                      </CTableHeaderCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            )}
            <div className="d-flex justify-content-between mt-3">
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
