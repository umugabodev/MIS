import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaTrash } from 'react-icons/fa';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';

const Dashboards1 = () => {
  const token = localStorage.getItem('accessToken');
  const [personnel, setPersonnel] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1); // Default to 1 page
  const navigate = useNavigate();
  const [deletePersonId, setDeletePersonId] = useState(null);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await fetch(`http://localhost:3007/api/v1/personnel?page=${page}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const result = await response.json();
          if (result.status === "Successful") {
            setPersonnel(result.data.content);
            setTotalPages(result.data.page.totalPages);
          } else {
            setError(result.message);
          }
        } else {
          setError('Failed to fetch Personnel');
        }
      } catch (error) {
        setError('Error fetching Personnel');
      }
    };

    fetchPersonnel();
  }, [page, token]);

  const handleView = (id) => {
    navigate(`/personnel/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/personnel/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setPersonnel(personnel.filter(person => person.id !== id));
        setDeletePersonId(null); // Reset deletePersonId after deletion
      } else {
        setError('Failed to delete Personnel');
      }
    } catch (error) {
      setError('Error deleting Personnel');
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const confirmDelete = (id) => {
    setDeletePersonId(id);
  };

  const handleDeleteConfirmed = () => {
    if (deletePersonId) {
      handleDelete(deletePersonId);
    }
  };

  const handleCancelDelete = () => {
    setDeletePersonId(null); // Reset deletePersonId
  };

  return (
    <CRow>
      <CCol xs="12">
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center bg-dark text-light">
            <h5 className="mb-0">List of Personnel</h5>
            <Link to="/addPersonnel" className="btn btn-outline-light">
              <i className="fas fa-plus-circle"></i> Add New Personnel
            </Link>
          </CCardHeader>
          <CCardBody className="table-responsive">
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-hover table-striped table-bordered">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">SVC No</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Name</th>
                  <th scope="col">Marital Status</th>
                  <th scope="col">Current Unit</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Place Of Birth</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {personnel.map((person, index) => (
                  <tr key={person.id}>
                    <td>{person.serviceNumber}</td>
                    <td>{person.rank}</td>
                    <td>{`${person.firstname} ${person.lastname}`}</td>
                    <td>{person.maritalStatus}</td>
                    <td>{person.currentunit}</td>
                    <td>{new Date(person.dob).toLocaleDateString()}</td>
                    <td>{person.gender}</td>
                    <td>{person.placeofbirth}</td>
                    <td>
                      <CButton onClick={() => handleView(person.id)} color="info" size="sm" className="me-2">
                        <FaEye /> View
                      </CButton>
                      <CButton onClick={() => confirmDelete(person.id)} color="danger" size="sm">
                        <FaTrash /> Delete
                      </CButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {deletePersonId !== null && (
              <div className="confirmation-dialog bg-warning text-dark p-3 rounded mt-3">
                <p className="mb-0">Are you sure you want to delete this person?</p>
                <div className="mt-2">
                  <CButton color="danger" onClick={handleDeleteConfirmed}>Delete</CButton>{' '}
                  <CButton color="secondary" onClick={handleCancelDelete}>Cancel</CButton>
                </div>
              </div>
            )}

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-primary" onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
                Previous
              </button>
              <button className="btn btn-outline-primary" onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages - 1}>
                Next
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Dashboards1;
