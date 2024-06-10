import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
} from '@coreui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '', // Added role field
    department: '', // Added department field
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const labelStyle = { display: 'block', marginBottom: '8px' };
  const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' };
  const errorStyle = { color: 'red', marginTop: '-10px', marginBottom: '10px' };
  const buttonStyle = { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' };

  return (
    <CCol xs="6" className=" ">
      <CCard className="mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
  <CCardHeader className="d-flex justify-content-between align-items-center">
    <h5 className="mb-0">Personnel Registration</h5>
  </CCardHeader>
        <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#DCDCDC' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
            <label style={{ ...labelStyle, color: '#333' }}>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        style={{ ...inputStyle, color: '#555' }}
      />
      {errors.username && <p style={errorStyle}>{errors.username}</p>}
    </div>
    <div style={{ marginBottom: '15px' }}>
      <label style={{ ...labelStyle, color: '#333' }}>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{ ...inputStyle, color: '#555' }}
      />
      {errors.email && <p style={errorStyle}>{errors.email}</p>}
    </div>
    <div style={{ marginBottom: '15px' }}>
      <label style={{ ...labelStyle, color: '#333' }}>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        style={{ ...inputStyle, color: '#555' }}
      />
      {errors.password && <p style={errorStyle}>{errors.password}</p>}
    </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Department:</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <button type="submit" style={buttonStyle}>Register</button>
          </form>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default RegistrationForm;
