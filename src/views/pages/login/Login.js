import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center justify-content-center"> {/* Centered content */}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}> {/* Resizing the form */}
            <CCard className="p-2">
              <CCardBody>
                <div className="text-center mb-4"> {/* Logo above the header */}
                  {/* <img
                    src={require("/src/assets/Logo_altogether.png")}
                    alt="Company Logo"
                    style={{ width: '150px', height: 'auto' }}
                  /> */}
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
                  <CButton color="primary" className="w-100" onClick={handleSubmit}> {/* Full width button */}
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
