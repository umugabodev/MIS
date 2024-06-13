import React from 'react'
import Dashboards1 from './views/dashboardS1/Dashboards1'
import DashboardAdmin from './views/dashboardS1/sysAdmindashboard/DashboardAdmin'
const sidebar = React.lazy(() => import('/src/components/header/adminsidebar/Adminsidebar'))

const RecruiterForm = React.lazy(() => import('/src/views/dashboardS1/Recruitors/RecruiterForm.js'))
const RecruiterList = React.lazy(() => import('/src/views/dashboardS1/Recruitors/RecruiterList.js'))

const UserList = React.lazy(() => import('/src/views/dashboardS1/User/UserList.js'))
const CaseFileList = React.lazy(() => import('/src/views/pages/personnel/CaseFileList'))
const ListofPersonnel = React.lazy(() => import('/src/views/dashboardS1/Tables/ListofPersonnel'))
const mission = React.lazy(() => import('/src/views/welfare/mission.js'))
const AddCase = React.lazy(() => import('/src/views/pages/personnel/addCase.js'))
const AddPersonnel = React.lazy(() => import('/src/views/pages/personnel/addPersonnel.js'))
const RegistrationForm = React.lazy(() => import('/src/views/dashboardS1/User/RegistrationForm.js'))
const Paradestate = React.lazy(() => import('/src/views/parade state/daily.js'))
const MonthlyParade = React.lazy(() => import('/src/views/parade state/monthly.js'))
const Streangthreturn = React.lazy(() => import('/src/views/parade state/Streangth.js'))
const internaldep = React.lazy(() => import('/src/views/deployments/internaldep.js'))
const externaldep = React.lazy(() => import('/src/views/deployments/externaldep.js'))
const rca = React.lazy(() => import('/src/views/welfare/rca.js'))
const soldiersKit = React.lazy(() => import('/src/views/welfare/soldiersKit.js'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const Profile = React.lazy(() => import('/src/views/dashboardS1/User/Profile.js'))


const routes = [
  { path: '/home', exact: true, name: 'Home' },
  { path: '/DashboardAdmin', name: 'Dashboard Admin', element: DashboardAdmin },
  { path: '/dashboards1', name: 'Dashboard', element: Dashboards1 },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/profile', name: 'Personal Profile', element: Profile },

  
  { path: '/RecruiterForm', name: 'Recruiter Form', element: RecruiterForm },
  { path: '/CaseFileList', name: 'CaseFileList', element: CaseFileList },
  { path: '/UserList', name: 'List Of Users', element: UserList },
  { path: '/RecruiterList', name: 'List Of Recruitors', element: RecruiterList },

  { path: '/ListofPersonnel', name: 'List Of Personnel', element: ListofPersonnel },
  { path: '/AddCase', name: 'Add Case', element: AddCase },
  { path: '/AddPersonnel', name: 'Add Personnel', element: AddPersonnel },
  { path: '/sidebar', name: 'sidebar', element: sidebar },
  { path: '/RegistrationForm', name: 'Registration Form', element: RegistrationForm },
  { path: '/daily', name: 'Daily Parade State', element: Paradestate },
  { path: '/monthly', name: 'Monthly Parade State', element: MonthlyParade },
{ path: '/Streangth', name: 'Streangth return', element: Streangthreturn },
{ path: '/internaldep', name: 'Internal Deployments', element: internaldep },
{ path: '/externaldep', name: 'External Deployments', element: externaldep },
{ path: '/mission', name: 'Mission', element: mission },
{ path: '/rca', name: 'RCA', element: rca },
{ path: '/soldiersKit', name: 'Soldiers Kit', element: soldiersKit },





]

export default routes
