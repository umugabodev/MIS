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
    <CHeader position="sticky" className="mb-4 p-0" style={styles.header} ref={headerRef}>
      <CContainer className="border-bottom px-4 d-flex justify-content-between align-items-center" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px', color: "#f8f9fa" }}
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
          <CDropdown innav={true}>
            <CDropdownToggle caret style={styles.dropdownToggle}>
              <CIcon icon={cilBell} size="lg" style={{ color: '#FFFFFF' }} /> {/* Apply white color directly */}
            </CDropdownToggle>
            <CDropdownMenu style={styles.dropdownMenu}>
              <CToaster>
                <CToast autohide={false} visible={true}>
                  <CToastHeader  style={styles.toastHeader}>
                    <div className="fw-bold me-auto">Password Reset</div>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody style={styles.toastBody}>This is a military-themed toast message.</CToastBody>
                  <CToastHeader style={styles.toastHeader}>
                    <div className="fw-bold me-auto">System Maintenance</div>
                    <small>10 min ago</small>
                  </CToastHeader>
                  <CToastBody style={styles.toastBody}>Planned maintenance on 01/07/2024 from 00:00 to 04:00 UTC.</CToastBody>
                  <CToastBody style={styles.toastBody}>This is to inform you that the system may temporarily be down.</CToastBody>
                </CToast>
              </CToaster>
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
    backgroundColor: '#18453b', // Background color for the header
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
    backgroundColor: '#4E617A', // Background color for the breadcrumb container
  },
  dropdownMenu: {
    width: '300px', // Set a fixed width for the dropdown menu
  },
  dropdownToggle: {
    backgroundColor: '#18453b', // Background color for the dropdown toggle button
    borderColor: '#18453b', // Border color for the dropdown toggle button
  },
  toastHeader: {
    backgroundColor: '#18453b', // Background color for toast headers
    color: '#FFFFFF', // White text for toast headers
  },
  toastBody: {
    color: '#FFFFFF', // White text for toast bodies
  },
};

export default AppHeader;
