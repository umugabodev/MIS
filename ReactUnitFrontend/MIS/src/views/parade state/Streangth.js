import React from 'react'
import classNames from 'classnames'

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


const Streangthreturn = () => {
  const progressExample = [
    { title: 'Other Ranks', value: '205', percent: 70, color: 'success' },
    { title: 'NCOs', value: '74', percent: 51, color: 'success' },
    { title: 'SNCOs', value: '31', percent: 50, color: 'success' },
    { title: 'Junior Officers', value: '62', percent: 80, color: 'success' },
    { title: 'Senior Officers', value: '14', percent: 70, color: 'success' },
    
  ]

  const progressGroupExample1 = [
    { title: 'Male (Officers)', icon: cilUser, value: 53 },
    { title: 'Female (Officers)', icon: cilUserFemale, value: 26 },
  ]

  const progressGroupExample2 = [
    { title: 'Male (NCOs)', icon: cilUser, value: 64 },
    { title: 'Female (NCOs)', icon: cilUserFemale, value: 43 },
  ]

 
  return (
    <>
      
      
      <CRow>
        <CCol>
        {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>
                  <div>
                  <hr className="mt-4" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>
                  </div>
                </CCol>
              </CRow>

           
       
        
      
    </>
  )
}

export default Streangthreturn
