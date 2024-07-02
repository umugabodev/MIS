import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';
import { Card, CardContent, Typography } from '@mui/material';

const MemoryMonitor = () => {
  const [memoryUsage, setMemoryUsage] = useState(0);

  useEffect(() => {
    const updateMemoryUsage = () => {
      // Calculate memory usage (for demonstration purposes, generate random usage)
      const randomUsage = Math.random() * 100;
      setMemoryUsage(randomUsage.toFixed(2));
    };

    // Update memory usage every 3 seconds
    const interval = setInterval(updateMemoryUsage, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <CCard className="shadow mb-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <CCardHeader className="bg-info text-white d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Memory Monitor</h6>
      </CCardHeader>
      <CCardBody className="p-4">
        <Card className="mb-4">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Memory Usage
            </Typography>
            <Typography variant="h4">{memoryUsage} %</Typography>
          </CardContent>
        </Card>
      </CCardBody>
    </CCard>
  );
};

export default MemoryMonitor;
