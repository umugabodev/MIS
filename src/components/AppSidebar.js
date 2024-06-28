import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { AppSidebarNav } from './AppSidebarNav';
import navigation from '/src/_nav'; // Import your navigation configuration

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-bottom">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/src/assets/rdf.png"
            alt="RDF Logo"
            style={{ width: '50%', height: 'auto', marginRight: '%' }}
          />
          <strong style={{ marginLeft: '6px', fontSize: '45px' }}>MIS</strong>
        </div>
        <CSidebarBrand to="/" />
      </CSidebarHeader>

      <AppSidebarNav items={navigation} /> {/* Pass navigation items to AppSidebarNav */}

      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default AppSidebar;
