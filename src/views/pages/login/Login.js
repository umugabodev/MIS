import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboards1");
  };

  return (
    <div className="bg-white min-vh-100 d-flex flex-row align-items-center justify-content-center">
      <CContainer>
        <CRow>
          <CCol md={6}>
            <img
              src="/src/assets/images/Da.jpg" // Adjust the path to your image
              alt="Company Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </CCol>
          <CCol md={6} style={{justifyContent: 'center'}}>
          <img
              src="/src/assets/Logo_altogether.png" // Adjust the path to your image
              alt="Company Logo"
              style={{width: '10%', height: 'auto' }}
            />
            <CCard className="bg-body-tertiary p-2">
              <CCardBody className='bg-body-tertiary'>
                <div className="text-center mb-4">
                  <h2 className="mt-4 text-3xl font-bold text-gray-900">
                    MIS SYSTEM
                  </h2>
                </div>
                <CForm>
                  <p className="text-body-secondary">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CButton color="primary" className="w-100" onClick={handleSubmit}>
                    Login
                  </CButton>
                </CForm>
                <div className="text-center mt-3">
                  <Link to="/forgot-password" className="text-body-secondary">
                    Forgot password?
                  </Link>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
