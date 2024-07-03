import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilClock,
  cilCalendar,
} from '@coreui/icons';
import { AppBreadcrumb } from './index';
import { AppHeaderDropdown } from './header/index';
import "../assets/styles/themes.css";

const AppHeader = () => {
  const headerRef = useRef();
  const { colorMode, setColorMode } = useColorModes('light'); // Ensure 'light' mode initially
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [militaryTime, setMilitaryTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current && headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
    });

    // Update time and date every second
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setMilitaryTime(`${hours}:${minutes}:${seconds}`);

      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();
      setDate(`${day}/${month}/${year}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CHeader position="sticky" className="mb-4 p-0 bg-dark" ref={headerRef}>
      <CContainer className="border-bottom px-4 d-flex justify-content-between align-items-center" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink as={NavLink} style={styles.navLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <div className="flex-grow-1 d-none d-md-flex justify-content-center align-items-center" style={styles.infoContainer}>
          <CIcon icon={cilClock} style={styles.icon} />
          <div style={styles.infoText}>{`Time: ${militaryTime}`}</div>
          <CIcon icon={cilCalendar} style={styles.icon} />
          <div style={styles.infoText}>{`Date: ${date}`}</div>
        </div>
        <CHeaderNav className="d-flex align-items-center">
          <CDropdown innav="true">
            <CDropdownToggle caret style={styles.dropdownToggle}>
              <CIcon icon={cilBell} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu style={styles.dropdownMenu}>
              <CToaster>
                <CToast autohide={false} visible={true}>
                  <CToastHeader  style={styles.toastHeader}>
                    
                    <div className="fw-bold me-auto">Passord Reset</div>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody style={styles.toastBody}>This is a military-themed toast message.</CToastBody>
                  <CToastHeader style={styles.toastHeader}>
                    <div className="fw-bold me-auto">System Mantainance</div>
                    <small>10 min ago</small>
                  </CToastHeader>
                  <CToastBody style={styles.toastBody}>Planned maintenance on 01/07/2024 from 00:00 to 04:00 UTC.</CToastBody>
                <CToastBody style={styles.toastBody}>This is to inform you that system may temporaly down.</CToastBody>
                </CToast>
                
              </CToaster>
              {/* Add more CDropdownItems for other alert options */}
            </CDropdownMenu>
          </CDropdown>
          {/* <CNavItem>
            <CNavLink href="#" style={styles.navLink}>
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem> */}
          <CNavItem>
            <CNavLink href="/#/MessagePanel" style={styles.navLink}>
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid style={styles.breadcrumbContainer}>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

const styles = {
  header: {
    backgroundColor: '#03381d', // Military-themed dark color
  },
  navLink: {
    color: '#FFFFFF', // White text for contrast
  },
  infoContainer: {
    fontFamily: 'Courier, monospace',
    color: '#FFFFFF', // White text for contrast
  },
  icon: {
    marginRight: '5px',
    color: '#FFFFFF', // White icons for contrast
  },
  infoText: {
    marginRight: '20px',
  },
  breadcrumbContainer: {
    backgroundColor: '#4E617A', // New background color for the breadcrumb container
  },
  // dropdownToggle: {
  //   color: '#FFFFFF', // White text for contrast
  // },
  dropdownMenu: {
    // backgroundColor: '#65b8a0', // Dark background for the dropdown menu
   
    width: '300px', // Set a fixed width for the dropdown menu
  },
  // toastHeader: {
  //   backgroundColor: '#03381d', // Military-themed dark color for the toast header
  //   color: '#FFFFFF', // White text for contrast
  // },
  // toastBody: {
  //   backgroundColor: '#2E2E2E', // Dark background for the toast body
  //   color: '#84e8cc', // White text for contrast
  // },
};

export default AppHeader;
