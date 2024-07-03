// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleLogout = () => {
//             // Clear localStorage
//             localStorage.clear();

//             // Clear cookies if applicable
//             document.cookie.split(";").forEach(function(c) {
//                 document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//             });

//             // Redirect to the login page
//             navigate('/login');
//         };

//         handleLogout();
//     }, [navigate]);

//     return null;
// };

// export default Logout;
