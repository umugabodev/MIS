import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      admin: { username: 'adminUser', password: 'adminUser' },
      s1comms: { username: 's1comms', password: 's1comms' },
      s2comms: { username: 's2comms', password: 's2comms' },
      manager: { username: 'managerUser', password: 'managerPass' },
      
      
    };

    let role;

    if (username === credentials.admin.username && password === credentials.admin.password) {
      role = 'admin';
      localStorage.setItem('authToken', 'adminToken'); 
    } else if (username === credentials.manager.username && password === credentials.manager.password) {
      role = 'manager';
      localStorage.setItem('authToken', 'managerToken'); 

    } else if (username === credentials.s1comms.username && password === credentials.s1comms.password) {
      role = 's1comms';
      localStorage.setItem('authToken', 's1commsToken'); 

    } else if (username === credentials.s2comms.username && password === credentials.s2comms.password) {
      role = 's2comms';
      localStorage.setItem('authToken', 's2commsToken');

    
    } else {
      setError('Invalid username or password');
      return;
    }

    // Store user role in localStorage
    localStorage.setItem('userRole', role);

    // Navigate to the appropriate dashboard based on role
    switch (role) {
      case 'admin':
        navigate('/DashboardAdmin');
        break;
        case 's1comms':
          navigate('/s1dashboard');
          break;
          case 's2comms':
          navigate('/s2dashboard');
          break;
         case 'manager':
        navigate('#');
        break;
      default:
        navigate('/Login');
    }
  };

  return (
    <div className="bg-white min-vh-100 d-flex flex-column justify-content-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} className="d-none d-md-flex align-items-center justify-content-center">
            <img
              src="/src/assets/images/Da.jpg" // Adjust the path to your image
              alt="Company Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </CCol>
          <CCol md={6} xs={12} className="d-flex align-items-center justify-content-center">
            <CCardBody style={{ width: '100%', maxWidth: '400px' }}>
              <div className="text-center mb-4">
                <img
                  src="/src/assets/Logo_altogethe.png" // Adjust the path to your image
                  alt="Company Logo"
                  style={{ width: '50%', height: 'auto' }}
                />
                <h2 className="mt-4 text-3xl font-bold" style={{ color: 'black' }}>
                  MIS SYSTEM
                </h2>
              </div>
              <CCard className="bg-white">
                <CForm onSubmit={handleSubmit}>
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <p style={{ color: 'black' }}>Username</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </CInputGroup>
                  <p style={{ color: 'black' }}>Password</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </CInputGroup>
                  <CButton color="primary" className="w-100" type="submit">
                    Login
                  </CButton>
                </CForm>
              </CCard>
            </CCardBody>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
