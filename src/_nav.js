import React from 'react'
import CIcon from '@coreui/icons-react'


import {

  cilCursor,
  cilDescription,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    //MENU DESIGNED FOR S1
    component: CNavItem,
    name: 'S1 Dashboard',
    to: '/dashboards1',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
    
  },
  {
    component: CNavTitle,
    name: 'PERSONNEL INFO',
  },
  {
    component: CNavGroup,
    name: 'Personnel Data',

    icon: <CIcon icon={cilStar} customClassName="nav-icon"/>,
    
    items: [
      {
        component: CNavItem,
        name: 'Add Personnel',
        to: '/AddPersonnel',
      },
      {
        component: CNavItem,
        name: 'Manage Personnel',
        to: '/ListofPersonnel',
      },
  
      // {
      //   component: CNavItem,
      //   name: 'On Course',
      //   to: '/404',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Completed',
      //   to: '/500',
      // },
    ],
  },
  {
    component: CNavTitle,
    name: 'ADMINISTRATION INFO',
  },
  {
    component: CNavGroup,
    name: 'Parade State',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Daily',
        to: '/daily',
      },
      {
        component: CNavItem,
        name: 'Monthly',
        to: '/monthly',
      },
      {
        component: CNavItem,
        name: 'Strength Return',
        to: '/Streangth',
      },
     
    ],
  },
  {
    component: CNavGroup,
    name: 'Deployments',
    to: '#',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Internal Deployment',
        to: '/internaldep',
      },
      {
        component: CNavItem,
        name: 'External Deployment',
        to: '/externaldep',
      },
    
    ],
  },
  {
    component: CNavGroup,
    name: 'Welfare',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mission',
        to: '/mission',
      },
      {
        component: CNavItem,
        name: 'RCA',
        to: '/rca',
      },
      {
        component: CNavItem,
        name: 'Soldiers Kit',
        to: '/soldiersKit',
      },
      
    ],
  },

  {
    component: CNavTitle,
    name: 'RECRUITMENT INFO',
  },
  {
    component: CNavGroup,
    name: 'Recruitment',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Recruitors',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Pendings',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'On Course',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Completed',
        to: '#',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'REPORTS',
  },
  {
    component: CNavGroup,
    name: 'Select report',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Statistical Report',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Monthly Report',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Yearly Report',
        to: '#',
      },
     
    ],
  },
  {
    component: CNavItem,
    name: 'Financial Docs',
    href: '#',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
 
    //END OF MENU DESIGNED FOR S1
    {
      //MENU DESIGNED FOR S1
      component: CNavItem,
      name: 'SYSTEM ADMIN',
      to: '/DashboardAdmin',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      badge: {
        color: 'info',
        text: 'NEW',
      },
      
    },
    {
      component: CNavTitle,
      name: 'USER INFO',
    },
    {
      component: CNavGroup,
      name: 'User Data',
  
      icon: <CIcon icon={cilStar} customClassName="nav-icon"/>,
      
      items: [
        {
          component: CNavItem,
          name: 'Add User',
          to: '/RegistrationForm',
        },
        {
          component: CNavItem,
          name: 'Manage Users',
          to: '/ListofPersonnel',
        },
  
      ],
    },
    {
      component: CNavTitle,
      name: 'PERMISSION INFO',
    },
    {
      component: CNavGroup,
      name: 'Assign Permissions',
      to: '#',
      icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'Add permissions',
          to: '#',
        },
        {
          component: CNavItem,
          name: 'Link UserRight',
          to: '#',
        },
        {
          component: CNavItem,
          name: 'De-link UserRight',
          to: '#',
        },
        
      ],
      
    },
    {
      component: CNavTitle,
      name: 'SYSTEM INFO',
    },
    {
      component: CNavGroup,
      name: 'Activities',
      to: '#',
      icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'Active Users',
          to: '#',
        },
        {
          component: CNavItem,
          name: 'CPU Consumptions',
          to: '#',
        },
        {
          component: CNavItem,
          name: 'Memory Consumptions',
          to: '#',
        },
        {
          component: CNavItem,
          name: 'Sys Logs',
          to: '#',
        },
        
      ],
      
    },

  //End of SYSTEM ADMIN NAVABAR
  {
    //MENU DESIGNED FOR S2
    component: CNavItem,
    name: 'S2 Dashboard',
    to: '/DashboardAdmin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
    
  },
  {
    component: CNavTitle,
    name: 'DISCIPLINARY INFO',
  },
  {
    component: CNavGroup,
    name: 'Case File',

    icon: <CIcon icon={cilStar} customClassName="nav-icon"/>,
    
    items: [
      {
        component: CNavItem,
        name: 'Add Case File',
        to: '/AddCase',

      },
      {
        component: CNavItem,
        name: 'Manage Users',
        to: '/CaseFileList',
      },

    ],
  },
  {
    component: CNavTitle,
    name: 'SECURITY INFO',
  },
  {
    component: CNavGroup,
    name: 'Own Force',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add security issue',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Issues List',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Issues Report',
        to: '#',
      },
      
    ],
    
  },
  {
    component: CNavGroup,
    name: 'EN Force',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add security issue',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Issues List',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Issues Report',
        to: '#',
      },
      
    ],
    
  },
  {
    component: CNavTitle,
    name: 'EQUIPMENT INFO',
  },
  {
    component: CNavGroup,
    name: 'Trace Equipment',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Active Equipment',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Inactive Equipment',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Archived Equipment',
        to: '#',
      },    
    ],
    
  },

//End of S2 NAVABAR
    
]

export default _nav
