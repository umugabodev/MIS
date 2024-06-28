import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from '@mui/material';
import { PeopleAlt, Person, History } from '@mui/icons-material';

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    fetchUsersData();
    const interval = setInterval(fetchUsersData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchUsersData = () => {
    // Simulated data (replace with actual data fetching logic)
    const totalUsersData = 20; // Replace with actual count from API or database
    const activeUsersData = [
      { 
        id: 1, 
        username: 's1@minadef.comms.bdeHq.rw', 
        lastActive: '2024-03-01 14:30', 
        impactLevel: 'high',
        actions: [
          { timestamp: '2024-06-27 10:15', description: 'Logged in' },
          { timestamp: '2024-06-26 15:30', description: 'Updated profile' }
        ]
      },
      { 
        id: 2, 
        username: 's2@minadef.comms.bdeHq.rw', 
        lastActive: '2024-02-02 09:45', 
        impactLevel: 'middle',
        actions: [
          { timestamp: '2024-06-27 09:00', description: 'Added new cases' },
          { timestamp: '2024-06-26 14:00', description: 'Viewed reports' }
        ]
      },
      { 
        id: 3, 
        username: 'BdeAdmin@minadef.comms.bdeHq.rw', 
        lastActive: '2024-07-02 11:20', 
        impactLevel: 'low',
        actions: [
          { timestamp: '2024-06-27 11:30', description: 'Changed settings' },
          { timestamp: '2024-06-26 16:45', description: 'Sent notifications' }
        ]
      }
    ]; // Replace with actual active users data

    setTotalUsers(totalUsersData);
    setActiveUsers(activeUsersData);
  };

  const inactiveUsers = totalUsers - activeUsers.length;

  const handleTraceActivity = (userId) => {
    // Replace with actual logic to trace user activity
    console.log(`Tracing activity of user with ID ${userId}`);
    // Example: Send a request to server to fetch user activity log
  };

  const toggleUserActivity = (userId) => {
    if (expandedUser === userId) {
      setExpandedUser(null);
    } else {
      setExpandedUser(userId);
    }
  };

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Users Summary
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Total Users: {totalUsers}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Active Users: {activeUsers.length}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Inactive Users: {inactiveUsers}
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Active Users
          </Typography>
          <List>
            {activeUsers.map(user => (
              <React.Fragment key={user.id}>
                <ListItem button onClick={() => toggleUserActivity(user.id)}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary={user.username} secondary={`Last active: ${user.lastActive}`} />
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleTraceActivity(user.id)}
                  >
                    Trace Activity
                  </Button>
                  {user.impactLevel === 'high' && (
                    <Typography variant="body2" color="error" style={{ marginLeft: '10px' }}>
                      High Impact
                    </Typography>
                  )}
                  {user.impactLevel === 'middle' && (
                    <Typography variant="body2" color="primary" style={{ marginLeft: '10px' }}>
                      Middle Impact
                    </Typography>
                  )}
                  {user.impactLevel === 'low' && (
                    <Typography variant="body2" color="secondary" style={{ marginLeft: '10px' }}>
                      Low Impact
                    </Typography>
                  )}
                </ListItem>
                {expandedUser === user.id && (
                  <div>
                    <List>
                      {user.actions.map((action, index) => (
                        <React.Fragment key={index}>
                          <ListItem>
                            <ListItemText primary={`${action.description} - ${action.timestamp}`} />
                          </ListItem>
                          {index < user.actions.length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                    </List>
                    <Divider />
                  </div>
                )}
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveUsers;
