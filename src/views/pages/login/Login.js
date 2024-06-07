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
      
          <CCardBody className='' style={{ maxWidth: '400px', margin: 'auto',marginright:'280x' }}>
            <div className="text-center mb-4">
              <img
                src="/src/assets/Logo_altogethe.png" // Adjust the path to your image
                alt="Company Logo"
                style={{ maxWidth: '50%', height: '20' }}
              />
              <h2 className="mt-4 text-3xl font-bold text-gray-900" style={{ color: 'black' }}>
                MIS SYSTEM
              </h2>
            </div>
            <CCard className='bg-white '>
            <CForm className='mx-4 my-12 '>
            <p style={{ color: 'black' }}>Username</p>


              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput placeholder="Username" autoComplete="username" className='bg-white color-black'  />
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
                  className='bg-white '
                />
              </CInputGroup>
              <CButton color="primary" className="w-100" onClick={handleSubmit}>
                Login
              </CButton>
            </CForm>
            <div className="text-center mt-3">
            {/* <Link to="#" className="text-body-secondary" style={{ color: 'black' }}>
  Forgot password?
</Link> */}

            </div></CCard>
          </CCardBody>
       

          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
