import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPeople } from '@coreui/icons';
const Dashboards1 = () => {
  const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
  const [personnel, setPersonnel] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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
  }, [page]);

  const toggleActive = (id) => {
    setPersonnel(personnel.map(person => {
      if (person.id === id) {
        return { ...person, active: !person.active };
      }
      return person;
    }));
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit personnel with id ${id}`);
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
        // Remove the deleted personnel from state
        setPersonnel(personnel.filter(person => person.id !== id));
      } else {
        setError('Failed to delete Personnel');
      }
    } catch (error) {
      setError('Error deleting Personnel');
    }
  };

  return (
    <CRow>
      <CCol xs="12">
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">List Of Personnel</h5>
            <Link to="/addPersonnel" className="btn btn-primary btn-sm">
              <i className="fas fa-plus-circle"></i> Add New Personnel
            </Link>
          </CCardHeader>
          <CCardBody>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-bordered table-hover">
              <thead className="bg-body-secondary">
                <tr>
                  <th>S/No</th>
                  <th>Rank</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Marital Stutus</th>
                  <th>Curent Unit</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Place Of Birth</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {personnel.map((person, index) => (
                  <tr key={person.id}>
                    <td className="text-center">{person.serviceNumber}</td>
                    <td>{person.rank}</td>
                    <td>{person.firstname}</td>
                    <td>{person.lastname}</td>
                    <td>{person.maritalStatus}</td>
                    <td>{person.currentunit}</td>
                    <td>{person.dob}</td>
                    <td>{person.gender}</td>
                    <td>{person.placeofbirth}</td>
                    <td>
                      <CButton className={person.active ? "btn-success" : "btn-secondary"} size="sm" onClick={() => toggleActive(person.id)}>
                        {person.active ? "Active" : "Inactive"}
                      </CButton>
                      <CButton onClick={() => handleEdit(person.id)} color="info" size="sm">Edit</CButton>
                      <CButton onClick={() => handleDelete(person.id)} color="danger" size="sm">Delete</CButton>
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