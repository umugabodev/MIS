import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilCursor,
  cilDescription,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const getNavItems = (userRole) => {

  const adminItems = [
    {
      //MENU DESIGNED FOR S1
      component: CNavItem,
      name: 'SYSTEM ADMIN',
      to: '/DashboardAdmin',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      
      
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
          to: '/UserList',
        },
  
      ],
    },
    {
      component: CNavTitle,
      name: 'UNIT/DEP',
    },
    {
      component: CNavGroup,
      name: ' Fomations',
  
      icon: <CIcon icon={cilStar} customClassName="nav-icon"/>,
      
      items: [
        {
          component: CNavItem,
          name: 'Add Unit',
          to: '/UnitRegistration',
        },
        {
          component: CNavItem,
          name: 'Manage Unit',
          to: '/UnitInfoList',
        },
        
        {
          component: CNavItem,
          name: 'Manage Department',
          to: '#',
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
          to: '/PermissionForm',
        },
        {
          component: CNavItem,
          name: 'Unit Permission Right',
          to: '/UserPermissionList',
        },
        {
          component: CNavItem,
          name: 'Unit Hierarchy',
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
          to: '/ActiveUsers',
        },
        {
          component: CNavItem,
          name: 'CPU Consumptions',
          to: '/CPUMonitor',
        },
        {
          component: CNavItem,
          name: 'Memory Consumptions',
          to: '/MemoryMonitor',
        },
        {
          component: CNavItem,
          name: 'Sys Logs',
          to: '#',
        },
        
      ],
      
    },
    // {
    //   component: CNavTitle,
    //   name: 'HIERARCHY INFO',
    // },
    {
      component: CNavGroup,
      name: 'OBAT',
      to: '#',
      icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'Unit Structure',
          to: '/MilitaryUnitsList',
        },
        {
          component: CNavItem,
          name: 'Deployment data',
          to: '/MilitaryUnit',
        },
        
      ],
      
    },
  ];

  
  const managerItems = [
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
  ];





  const s1commsItems = [
    {
      //MENU DESIGNED FOR S1
      component: CNavItem,
      name: 'S1 Dashboard',
      to: '/s1dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      
      
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
          to: '/RecruiterForm',
        },
        {
          component: CNavItem,
          name: 'Pendings',
          to: '/RecruiterList',
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
      href: '/#/FinancialReportForm',
      icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    },
  ];







  const s2commsItems = [
    {
      //MENU DESIGNED FOR S2
      component: CNavItem,
      name: 'S2 Dashboard',
      to: '/s2dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      
      
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
          name: 'Manage Cases',
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
          to: '/SecurityForm',
        },
        {
          component: CNavItem,
          name: 'Issues List',
          to: '/IssueList',
        },
        {
          component: CNavItem,
          name: 'Issues Report',
          to: '/IssueList',
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
          name: 'Add EN security issue',
          to: '/SecurityForm',
        },
        {
          component: CNavItem,
          name: 'EN Issues List',
          to: '/IssueList',
        },
        {
          component: CNavItem,
          name: 'EN Issues Report',
          to: '/IssueList',
        },
        
      ],
      
    },
    // {
    //   component: CNavTitle,
    //   name: 'EQUIPMENT INFO',
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Trace Equipment',
    //   to: '#',
    //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'Active Equipment',
    //       to: '#',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Inactive Equipment',
    //       to: '#',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Archived Equipment',
    //       to: '#',
    //     },    
    //   ],
      
    // },
  ];

  const s4commsItems = [
    {
      //MENU DESIGNED FOR S4
      component: CNavItem,
      name: 'S4 Dashboard',
      to: '/s4dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      
      
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
  ];

  switch (userRole) {
    case 'role_admin':
      return [ ...adminItems];
    // case 's1_regiment':
    //   return [ ...managerItems];
    case 's1_regiment':
        return [ ...s1commsItems];
    case 's2_regiment':
        return [...s2commsItems];
    case 's4_regiment':
        return [...s4commsItems];
      
    // default:
    //   return commonItems;
  }
};

const _nav = getNavItems(localStorage.getItem('userRole'));

export default _nav;
