import React from 'react'
import Dashboards1 from './views/dashboardS1/Dashboards1'
import DashboardAdmin from './views/dashboardS1/sysAdmindashboard/DashboardAdmin'




const sidebar = React.lazy(() => import('/src/components/header/adminsidebar/Adminsidebar'))






const CaseFileList = React.lazy(() => import('/src/views/pages/personnel/CaseFileList'))
// const PersonnelList = React.lazy(() => import('/src/views/pages/personnel/PersonnelList'))

const ListofPersonnel = React.lazy(() => import('/src/views/dashboardS1/Tables/ListofPersonnel'))
const AddPersonnel = React.lazy(() => import('/src/views/pages/personnel/addPersonnel.js'))
const RegistrationForm = React.lazy(() => import('/src/views/dashboardS1/User/RegistrationForm.js'))
const Paradestate = React.lazy(() => import('/src/views/parade state/daily.js'))
const MonthlyParade = React.lazy(() => import('/src/views/parade state/monthly.js'))
const Streangthreturn = React.lazy(() => import('/src/views/parade state/Streangth.js'))
const internaldep = React.lazy(() => import('/src/views/deployments/internaldep.js'))
const externaldep = React.lazy(() => import('/src/views/deployments/externaldep.js'))




const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/home', exact: true, name: 'Home' },
  { path: '/DashboardAdmin', name: 'Dashboard Admin', element: DashboardAdmin },
  { path: '/dashboards1', name: 'Dashboard', element: Dashboards1 },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  

  { path: '/CaseFileList', name: 'CaseFileList', element: CaseFileList },
  // { path: '/PersonnelList', name: 'PersonnelList', element: PersonnelList },
  { path: '/ListofPersonnel', name: 'List Of Personnel', element: ListofPersonnel },
  { path: '/AddPersonnel', name: 'Add Personnel', element: AddPersonnel },
  { path: '/sidebar', name: 'sidebar', element: sidebar },
  { path: '/RegistrationForm', name: 'Registration Form', element: RegistrationForm },
  { path: '/daily', name: 'Daily Parade State', element: Paradestate },
  { path: '/monthly', name: 'Monthly Parade State', element: MonthlyParade },
{ path: '/Streangth', name: 'Streangth return', element: Streangthreturn },
{ path: '/internaldep', name: 'Internal Deployments', element: internaldep },
{ path: '/externaldep', name: 'External Deployments', element: externaldep },




  
 

]

export default routes
