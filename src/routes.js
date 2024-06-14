import React from 'react'
import Dashboards1 from './views/dashboard/Dashboards1'
import DashboardAdmin from './views/dashboard/sysAdmindashboard/DashboardAdmin'
const sidebar = React.lazy(() => import('/src/components/header/adminsidebar/Adminsidebar'))

const RecruiterForm = React.lazy(() => import('/src/views/dashboard/s1dashboard/Recruitors/RecruiterForm.js'))
const RecruiterList = React.lazy(() => import('/src/views/dashboard/s1dashboard/Recruitors/RecruiterList.js'))
const MessagePanel = React.lazy(() => import('/src/views/dashboard/messages/MessagePanel'))
const MessageList = React.lazy(() => import('/src/views/dashboard/messages/MessageList'))
const UserList = React.lazy(() => import('/src/views/dashboard/User/UserList.js'))
const CaseFileList = React.lazy(() => import('/src/views/pages/personnel/CaseFileList'))
const ListofPersonnel = React.lazy(() => import('/src/views/dashboard/Tables/ListofPersonnel'))
const mission = React.lazy(() => import('/src/views/welfare/mission.js'))
const AddCase = React.lazy(() => import('/src/views/pages/personnel/addCase.js'))
const AddPersonnel = React.lazy(() => import('/src/views/pages/personnel/addPersonnel.js'))
const RegistrationForm = React.lazy(() => import('/src/views/dashboard/User/RegistrationForm.js'))
const Paradestate = React.lazy(() => import('/src/views/parade state/daily.js'))
const MonthlyParade = React.lazy(() => import('/src/views/parade state/monthly.js'))
const Streangthreturn = React.lazy(() => import('/src/views/parade state/Streangth.js'))
const internaldep = React.lazy(() => import('/src/views/deployments/internaldep.js'))
const externaldep = React.lazy(() => import('/src/views/deployments/externaldep.js'))
const rca = React.lazy(() => import('/src/views/welfare/rca.js'))
const soldiersKit = React.lazy(() => import('/src/views/welfare/soldiersKit.js'))
const FinancialReportForm = React.lazy(() => import('/src/views/pages/report/FinancialReportForm'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const s1dashboard = React.lazy(() => import('./views/dashboard/s1dashboard/S1Dashboard'))
const s2dashboard = React.lazy(() => import('./views/dashboard/s2dashboard/S2Dashboard'))
const S2widgets = React.lazy(() => import('./views/widgets/s2widgets'))




const routes = [
  { path: '/home', exact: true, name: 'Home' },
  { path: '/DashboardAdmin', name: 'System Admin', element: DashboardAdmin },
  { path: '/dashboards1', name: 'Dashboard', element: Dashboards1 },
  { path: '/widgets', name: 'Widgets', element: Widgets },
   { path: '/S1Dashboard', name: 'S1Dashboard', element: s1dashboard },
 { path: '/S2Dashboard', name: 'S2Dashboard', element: s2dashboard },
  { path: '/CaseFileList', name: 'CaseFileList', element: CaseFileList },
  { path: '/UserList', name: 'List Of Users', element: UserList },
  { path: '/ListofPersonnel', name: 'List Of Personnel', element: ListofPersonnel },
  { path: '/AddCase', name: 'Add Case', element: AddCase },
  { path: '/AddPersonnel', name: 'Add Personnel', element: AddPersonnel },
  { path: '/sidebar', name: 'sidebar', element: sidebar },
  { path: '/RegistrationForm', name: 'Registration Form', element: RegistrationForm },
  { path: '/daily', name: 'Daily Parade State', element: Paradestate },
  { path: '/monthly', name: 'Monthly Parade State', element: MonthlyParade },
  { path: '/Streangth', name: 'Strength return', element: Streangthreturn },
  { path: '/internaldep', name: 'Internal Deployments', element: internaldep },
  { path: '/externaldep', name: 'External Deployments', element: externaldep },
  { path: '/mission', name: 'Mission', element: mission },
  { path: '/rca', name: 'RCA', element: rca },
  { path: '/soldiersKit', name: 'Soldiers Kit', element: soldiersKit },
  { path: '/s2widgets', name: 'S2widgets', element: S2widgets },
  { path: '/RecruiterList', name: 'List Of Recruitors', element: RecruiterList },
  { path: '/RecruiterForm', name: 'Recruiter Form', element: RecruiterForm },
  { path: '/MessagePanel', name: 'MessagePanel Form', element: MessagePanel },
 { path: '/MessageList', name: 'Messages List', element: MessageList },
 { path: '/FinancialReportForm', name: 'Financial Report Form', element: FinancialReportForm },


]

export default routes
