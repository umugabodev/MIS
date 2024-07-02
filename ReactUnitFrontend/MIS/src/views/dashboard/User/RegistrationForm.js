import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    type: '', // Added user type field
  });

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone Number is required';
    } 
    else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone Number must be 10 digits';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    } else if (!formData.email.includes('@')) {
      validationErrors.email = 'Email must contain @ sign';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.type) {
      validationErrors.type = 'User Type is required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      fetch('http://localhost:3007/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Form submitted successfully:', data);
          setModalVisible(true);
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            type: '',
          });
          setErrors({});
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Optionally handle error response
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const labelStyle = { display: 'block', marginBottom: '8px' };
  const inputStyle = { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' };
  const errorStyle = { color: 'red', marginTop: '5px', marginBottom: '10px' };
  const buttonStyle = { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' };
  const twoColumnStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' };
  const columnStyle = { width: '48%', marginBottom: '15px' };

  return (
    <CCol xs="12" className=" ">
      <CCard className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center ">
          <h5 className="mb-0">User Registration Form</h5>
        </CCardHeader>
        <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f2f0f0' }}>
          <form onSubmit={handleSubmit}>
            <div style={twoColumnStyle}>
              <div style={columnStyle}>
                <label style={{ ...labelStyle, color: '#333' }}>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: '#555' }}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
              </div>
              <div style={columnStyle}>
                <label style={{ ...labelStyle, color: '#333' }}>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: '#555' }}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
              </div>
            </div>
            <div style={twoColumnStyle}>
              <div style={columnStyle}>
                <label style={{ ...labelStyle, color: '#333' }}>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: '#555' }}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && <p style={errorStyle}>{errors.phoneNumber}</p>}
              </div>
              <div style={columnStyle}>
                <label style={{ ...labelStyle, color: '#333' }}>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: '#555' }}
                  placeholder="Enter your email address"
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>
            </div>
            <div style={twoColumnStyle}>
              <div style={columnStyle}>
                <label style={{ ...labelStyle, color: '#333' }}>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: '#555' }}
                  placeholder="Enter your password"
                />
                {errors.password && <p style={errorStyle}>{errors.password}</p>}
              </div>
              <div style={columnStyle}>
                <label style={labelStyle}>User Type:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select User Role</option>
                  <option value="BDEADMIN">BDEADMIN</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                  <option value="STAFF">STAFF</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
                {errors.type && <p style={errorStyle}>{errors.type}</p>}
              </div>
            </div>
            <button type="submit" style={buttonStyle}>Register</button>
          </form>
        </CCardBody>
      </CCard>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader onClose={() => setModalVisible(false)}>
          <CModalTitle>Thank You!</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Your registration has been successfully submitted.
        </CModalBody>
        <CModalFooter>
          <Link to="/userlist">
            <CButton color="primary">Close</CButton>
          </Link>
        </CModalFooter>
      </CModal>
    </CCol>
  );
};

export default RegistrationForm;
