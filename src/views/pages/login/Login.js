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
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3007/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) {
        // Check if response is not ok (4xx or 5xx status code)
        throw new Error(data.error.message); // Throw an error with the error message from backend
      } else {
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('light', "light");
        console.log('Login successful:', user);
        const role = data.roles[0].name;

        localStorage.setItem('userRole', role);

        switch (role) {
          case 'role_admin':
            navigate('/DashboardAdmin');
            break;
          case 's1_regiment':
              navigate('/s1dashboard');
              break;
          case 's2_regiment':
              navigate('/s2dashboard');
              break;
          case 's4_regiment':
              navigate('/s4dashboard');
              break;
          case 'role_staff':
            navigate('#');
            break;
          default:
            navigate('/Unauthorized');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message); // Set the error state with the error message
    }
  };

  return (
    <div className="bg-white min-vh-100 d-flex flex-row align-items-center justify-content-center">
      <CContainer>
        <CRow>
          <CCol md={6}>
            <img
              src="/src/assets/images/Da.jpg"
              alt="Company Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </CCol>
          <CCol md={6} style={{ justifyContent: 'center' }}>

            <CCardBody className='' style={{ maxWidth: '400px', margin: 'auto', marginright: '280x' }}>
              <div className="text-center mb-4">
                <img
                  src="/src/assets/Logo_altogethe.png"
                  alt="Company Logo"
                  style={{ maxWidth: '50%', height: '20' }}
                />
                <h2 className="mt-4 text-3xl font-bold text-gray-900" style={{ color: 'black' }}>
                  MIS SYSTEM
                </h2>
              </div>
              <CCard className='bg-white '>
                <CForm onSubmit={handleSubmit} className='mx-4 my-12 '>
                  <p style={{ color: 'black' }}>Username</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} autoComplete="username" />
                  </CInputGroup>
                  <p style={{ color: 'black' }}>Password</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      onChange={e => setUser({ ...user, password: e.target.value })}
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CButton type='submit' color="primary" className="w-100" >
                    Login
                  </CButton>
                </CForm>
                {error && <p className="text-danger text-center mt-3">{error}</p>} {/* Display error if there's any */}
                <div className="text-center mt-3">
                  {/* <Link to="#" className="text-body-secondary" style={{ color: 'black' }}>
                    Forgot password?
                  </Link> */}
                </div>
              </CCard>
            </CCardBody>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
