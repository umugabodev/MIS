import React from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components';

const DefaultLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppSidebar />
      <div className="d-flex flex-column flex-grow-1">
        <AppHeader />
        <main className="flex-grow-1">
          <AppContent />
        </main>
        <AppFooter />
      </div>
    </div>
  );
}

export default DefaultLayout;
