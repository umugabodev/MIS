import React from 'react'
import CIcon from '@coreui/icons-react'
import customColors from './assets/js/customColors'

import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    //MENU DESIGNED FOR S1
    component: CNavItem,
    name: 'Dashboard',
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
    to: '#',
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
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Strength Return',
        to: '#',
      },
      // {
      //   component: CNavItem,
      //   name: 'Carousel',
      //   to: '/base/carousels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/base/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
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
        to: '#',
      },
      {
        component: CNavItem,
        name: 'External Deployment',
        to: '#',
      },
      // {
      //   component: CNavItem,
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
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
        to: '#',
      },
      {
        component: CNavItem,
        name: 'RCA',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Soldiers Kit',
        to: '#',
      },
      // {
      //   component: CNavItem,
      //   name: 'Range',
      //   to: '/forms/range',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
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
      // {
      //   component: CNavItem,
      //   name: 'Error 500',
      //   to: '/500',
      // },
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

    
]

export default _nav
