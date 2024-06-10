import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import {
  
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'


// sidebar nav config
import navigation from '/src/_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      // style={{backgroundColor: "#FF0000", color: "#FFFFFF"}}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      
    >
     <CSidebarHeader className="border-bottom">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="/src/assets/rdf.png" // Adjust the path to your image
      alt="RDF Logo"
      style={{ width: '50%', height: 'auto', marginRight: '%' }}
    />
    <strong style={{ marginLeft: '6px',fontSize: "14px" }}>MIS-  Management Information System</strong>
  </div>
  <CSidebarBrand to="/">
    
  </CSidebarBrand>
  {/* <CCloseButton
    className="d-lg-none"
    dark
    onClick={() => dispatch({ type: 'set', sidebarShow: false })}
  /> */}
</CSidebarHeader>


      <AppSidebarNav items={navigation}/>
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          // onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default AppSidebar
