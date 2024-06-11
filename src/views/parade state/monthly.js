import React from 'react'


import {

  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
 
  cilUser,
  cilUserFemale,
} from '@coreui/icons'




import WidgetsDropdown from '../widgets/WidgetsDropdown'


const monthly = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Monthly Parade State </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3">
                        <div className="text-body-secondary text-truncate small">1 Inf Div</div>
                        <div className="fs-5 fw-semibold">11</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        2 Inf Div
                        </div>
                        <div className="fs-5 fw-semibold">23</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        5 Inf Div
                        </div>
                        <div className="fs-5 fw-semibold">31</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        TF Div
                        </div>
                        <div className="fs-5 fw-semibold">09</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        Log Bde
                        </div>
                        <div className="fs-5 fw-semibold">16</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        MP Bde
                        </div>
                        <div className="fs-5 fw-semibold">09</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        Air Force
                        </div>
                        <div className="fs-5 fw-semibold">42</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                        Reserve Force
                        </div>
                        <div className="fs-5 fw-semibold">22</div>
                      </div>
                    </CCol>
                  </CRow>
                 
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">3 Inf Div</div>
                        <div className="fs-5 fw-semibold">36</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">4 Inf Div</div>
                        <div className="fs-5 fw-semibold">41</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Arty Div</div>
                        <div className="fs-5 fw-semibold">14</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Mech Div</div>
                        <div className="fs-5 fw-semibold">21</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">SOF</div>
                        <div className="fs-5 fw-semibold">21</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">RG</div>
                        <div className="fs-5 fw-semibold">23</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">DID</div>
                        <div className="fs-5 fw-semibold">06</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4  py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">ZCSS & AFOS</div>
                        <div className="fs-5 fw-semibold">17</div>
                      </div>
                    </CCol>
                  </CRow>

                  
                </CCol>
              </CRow>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default monthly
