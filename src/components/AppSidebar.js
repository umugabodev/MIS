import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react';

import { AppSidebarNav } from './AppSidebarNav';
import navigation from '/src/_nav'; // Import your navigation configuration

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      
      style={{
        backgroundColor: '#18453b',
        color: '#FFFFFF',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // Adding shadow box effect
      }}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/src/assets/rdf.png"
            alt="RDF Logo"
            style={{ width: '50%', height: 'auto', marginRight: '10px' }}
          />
          <strong style={{ marginLeft: '6px', fontSize: '45px', color: '#FFFFFF' }}>MIS</strong>
        </div>
        <CSidebarBrand to="/" />
      </CSidebarHeader>

      <AppSidebarNav items={navigation} style={{ color: '#FFFFFF' }} />

      <CSidebarFooter className="d-none d-lg-flex">
        <CSidebarToggler />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
