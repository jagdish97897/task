import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role } = useContext(AuthContext);

  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;
