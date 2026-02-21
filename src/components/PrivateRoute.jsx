import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, user, loading }) => {
    const location = useLocation();

    // ফায়ারবেজ থেকে ডেটা লোড হওয়ার সময় একটু অপেক্ষা করতে হবে
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // ইউজার যদি লগইন করা থাকে, তবে তাকে কাঙ্ক্ষিত পেজে যেতে দিন
    if (user) {
        return children;
    }

    // ইউজার লগইন না থাকলে তাকে লগইন পেজে পাঠিয়ে দিন
    // state={{from: location}} এর মাধ্যমে লগইন করার পর ইউজার আবার এই পেজে ফিরে আসতে পারবে
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;