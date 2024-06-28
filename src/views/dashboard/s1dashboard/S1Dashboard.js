import React from 'react';
import classNames from 'classnames';

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons';

import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';

import WidgetsDropdown from '/src/views/widgets/WidgetsDropdown';

const s1dashboard = () => {
  const progressExample = [
    { title: 'Other Ranks', value: '205', percent: 70, color: 'success' },
    { title: 'NCOs', value: '74', percent: 51, color: 'success' },
    { title: 'SNCOs', value: '31', percent: 50, color: 'success' },
    { title: 'Junior Officers', value: '62', percent: 80, color: 'success' },
    { title: 'Senior Officers', value: '14', percent: 70, color: 'success' },
  ];

  const progressGroupExample1 = [
    { title: 'Male (Officers)', icon: cilUser, value: 53 },
    { title: 'Female (Officers)', icon: cilUserFemale, value: 26 },
  ];

  const progressGroupExample2 = [
    { title: 'Male (NCOs)', icon: cilUser, value: 64 },
    { title: 'Female (NCOs)', icon: cilUserFemale, value: 43 },
  ];

  const tableExample = [
    {
      avatar: { src: avatar2, status: 'success' },
      user: {
        name: 'O NTAKIRUTIMANA',
        registered: 'Jan 1, 2022',
      },
      Rank: { name: 'Capt' },
      Div: { name: '3 Inf Div' },
      CUG: { number: '078809325' },
      location: 'Rubavu Gen Area',
    },
    {
      avatar: { src: avatar4, status: 'success' },
      user: {
        name: 'E GATESI',
        registered: 'Feb 1, 2023',
      },
      Rank: { name: 'Lt' },
      Div: { name: 'TF Inf Div' },
      CUG: { number: '07836974' },
      location: 'Ngarama Mil Barracks',
    },
    {
      avatar: { src: avatar3, status: 'success' },
      user: {
        name: 'A BITWAYIKI',
        registered: 'March 17, 2019',
      },
      Rank: { name: 'Maj' },
      Div: { name: 'SOF' },
      CUG: { number: '078532520' },
      location: 'Mukamira Mil Barracks',
    },
  ];

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1, gutter: 4 }} sm={{ cols: 2 }} lg={{ cols: 4 }} xl={{ cols: 5 }} className="mb-2 text-center">
            {progressExample.map((item, index, items) => (
              <CCol className={classNames({ 'd-none d-xl-block': index + 1 === items.length })} key={index}>
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">{item.value} ({item.percent}%)</div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Deployments</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    {[
                      { title: '1 Inf Div', value: 11 },
                      { title: '2 Inf Div', value: 23 },
                      { title: '5 Inf Div', value: 31 },
                      { title: 'TF Div', value: 9 },
                      { title: 'Log Bde', value: 16 },
                      { title: 'MP Bde', value: 9 },
                      { title: 'Air Force', value: 42 },
                      { title: 'Reserve Force', value: 22 },
                    ].map((item, index) => (
                      <CCol xs={6} key={index}>
                        <div className="border-start border-start-4 py-1 px-3 mb-3">
                          <div className="text-body-secondary text-truncate small">{item.title}</div>
                          <div className="fs-5 fw-semibold">{item.value}</div>
                        </div>
                      </CCol>
                    ))}
                  </CRow>
                  <hr className="mt-4" />
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
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    {[
                      { title: '3 Inf Div', value: 36 },
                      { title: '4 Inf Div', value: 41 },
                      { title: 'Arty Div', value: 14 },
                      { title: 'Mech Div', value: 21 },
                      { title: 'SOF', value: 21 },
                      { title: 'RG', value: 23 },
                      { title: 'DID', value: 6 },
                      { title: 'ZCSS & AFOS', value: 17 },
                    ].map((item, index) => (
                      <CCol xs={6} key={index}>
                        <div className="border-start border-start-4 py-1 px-3 mb-3">
                          <div className="text-body-secondary text-truncate small">{item.title}</div>
                          <div className="fs-5 fw-semibold">{item.value}</div>
                        </div>
                      </CCol>
                    ))}
                  </CRow>
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
                </CCol>
              </CRow>
              <br />

              <br />
            <CCardHeader>DSO</CCardHeader>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                    Rank 
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Full Name</CTableHeaderCell>
                    
                    <CTableHeaderCell className="bg-body-tertiary">Division</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      CUG
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Location</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {/* <CIcon size="xl" icon={item.Rank.name} title={item.Rank.name} /> */}
                        <h3  className="small text-body-secondary text-nowrap">{item.Rank.name}.</h3>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                         Started:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                    
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div>{item.Div.name}</div>
                         
                        </div>
                                        

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.CUG.number}</div>
                      </CTableDataCell>
                      <CTableDataCell>                      
                        <div className="fw-semibold text-nowrap">{item.location}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default s1dashboard
