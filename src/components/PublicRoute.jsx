import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // if (loading) {
    //     return <div className="spinner-border text-primary"></div>;
    // }

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default PublicRoute;