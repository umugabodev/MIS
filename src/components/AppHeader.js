import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
  cilClock,
  cilCalendar,
  cilLocationPin,
} from '@coreui/icons';

import { AppBreadcrumb } from './index';
import { AppHeaderDropdown } from './header/index';

const AppHeader = () => {
  const headerRef = useRef();
  const { colorMode, setColorMode } = useColorModes('light'); // Ensure 'light' mode initially
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [militaryTime, setMilitaryTime] = useState('');
  const [date, setDate] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current && headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
    });

    // Update military time and date every second
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

    // Get coordinates
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude.toFixed(2),
          lon: position.coords.longitude.toFixed(2),
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef} style={styles.header}>
      <CContainer className="border-bottom px-4 d-flex justify-content-between align-items-center" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/dashboard" as={NavLink} style={styles.navLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}

          {/* <CNavItem>
            <CNavLink href="#" style={styles.navLink}>Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" style={styles.navLink}>Settings</CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <div className="flex-grow-1 d-none d-md-flex justify-content-center align-items-center" style={styles.infoContainer}>
          <CIcon icon={cilClock} style={styles.icon} />
          <div style={styles.infoText}>{`Time: ${militaryTime}`}</div>
          <CIcon icon={cilCalendar} style={styles.icon} />
          <div style={styles.infoText}>{`Date: ${date}`}</div>
          <CIcon icon={cilLocationPin} style={styles.icon} />
          <div style={styles.infoText}>{`Coordinates: ${coordinates.lat}, ${coordinates.lon}`}</div>
        </div>
        <CHeaderNav className="d-flex align-items-center">
          <CNavItem>
            <CNavLink href="#" style={styles.navLink}>
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" style={styles.navLink}>
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/MessageList" style={styles.navLink}>
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4 d-md-none d-flex justify-content-between align-items-center" fluid style={styles.infoContainer}>
        <div style={styles.infoText}>{`Time: ${militaryTime}`}</div>
        <div style={styles.infoText}>{`Date: ${date}`}</div>
        <div style={styles.infoText}>{`Coordinates: ${coordinates.lat}, ${coordinates.lon}`}</div>
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
};

export default AppHeader;
