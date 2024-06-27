import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';
import { Card, CardContent, Typography, Modal, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CPUMonitor = () => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [cpuData, setCpuData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUsage = Math.random() * 100;
      setCpuUsage(randomUsage.toFixed(2));
      setCpuData(prevData => [...prevData, { time: new Date().toLocaleTimeString(), usage: randomUsage }]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <CCard className="shadow mb-12">
        <CCardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          {/* <h8 >CPU Monitor</h8> */}
        </CCardHeader>
        <CCardBody className="p-4">
          <Card onClick={handleSubmit} style={{ cursor: 'pointer', maxWidth: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CPU Usage
              </Typography>
              <Typography variant="h4">{cpuUsage} %</Typography>
            </CardContent>
          </Card>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cpuData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CCardBody>
      </CCard>

      <Modal open={modalVisible} onClose={closeModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            Detailed CPU Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Current CPU Usage: {cpuUsage} %
          </Typography>
          <Button variant="contained" color="primary" onClick={closeModal}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CPUMonitor;
