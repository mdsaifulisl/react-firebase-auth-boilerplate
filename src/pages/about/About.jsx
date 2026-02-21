import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-wrapper py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-5">
        

        <div className="row align-items-center mb-5 g-5">
          <div className="col-lg-6">
            <span className="badge px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: '#eef2ff', color: 'var(--primary-color)', fontSize: '14px', fontWeight: '600' }}>
              Our Mission
            </span>
            <h1 className="display-3 fw-bold mb-4" style={{ letterSpacing: '-1.5px', lineHeight: '1.2' }}>
              Building a <span style={{ color: 'var(--primary-color)' }}>Secure</span> Future for Web Apps.
            </h1>
            <p className="fs-5 text-muted mb-5" style={{ lineHeight: '1.8' }}>
              অ্যাসাইনমেন্ট-০৬ এর অংশ হিসেবে এই প্রজেক্টটি তৈরি করা হয়েছে। আমাদের লক্ষ্য হলো রিঅ্যাক্ট এবং ফায়ারবেজ ব্যবহার করে একটি অত্যন্ত নিরাপদ এবং সহজবোধ্য অথেনটিকেশন সিস্টেম তৈরি করা, যা ব্যবহারকারীর ডেটা সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়।
            </p>
            <div className="d-grid d-md-flex gap-3">
              <Link to="/register" className="btn-common btn-primary-custom px-5">Get Started Now</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5 rounded-5 text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', border: '1px solid #e2e8f0' }}>
              <div className="display-1 mb-4">🛡️</div>
              <h2 className="fw-bold">Your Privacy, Our Priority</h2>
              <p className="text-muted">আমরা ফায়ারবেজ এর ইন্ডাস্ট্রি-গ্রেড সিকিউরিটি লেয়ার ব্যবহার করি যাতে আপনার ব্যক্তিগত তথ্য সবসময় এনক্রিপ্টেড থাকে।</p>
            </div>
          </div>
        </div>

    
        <div className="row g-4 py-5">
          <div className="col-md-4">
            <div className="p-4 border-start border-4" style={{ borderColor: 'var(--primary-color)' }}>
              <h3 className="fw-bold">Who We Are</h3>
              <p className="text-muted">আমরা আধুনিক ওয়েব টেকনোলজি নিয়ে কাজ করতে পছন্দ করি। এই সিস্টেমটি React.js এবং Firebase এর সমন্বয়ে তৈরি একটি প্রজেক্ট।</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border-start border-4" style={{ borderColor: '#10b981' }}>
              <h3 className="fw-bold">What We Do</h3>
              <p className="text-muted">সহজ ইমেইল লগইন থেকে শুরু করে গুগল ও গিটহাব সোশ্যাল লগইন—সবকিছুই আমরা এক জায়গায় নিয়ে এসেছি।</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border-start border-4" style={{ borderColor: '#f59e0b' }}>
              <h3 className="fw-bold">Our Vision</h3>
              <p className="text-muted">ভবিষ্যতে আমরা এই সিস্টেমটিকে আরও উন্নত করতে চাই যাতে মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) এর সুবিধা যোগ করা যায়।</p>
            </div>
          </div>
        </div>

        
        <div className="mt-5 p-5 rounded-5" style={{ backgroundColor: '#1e293b' }}>
          <div className="row align-items-center">
            <div className="col-lg-8 text-white">
              <h2 className="fw-bold mb-3">Powered by Modern Tech Stack</h2>
              <p className="opacity-75 fs-5">এই প্রজেক্টটিতে সেরা সব টুলস ব্যবহার করা হয়েছে যা পারফরম্যান্স এবং স্কেলেবিলিটি নিশ্চিত করে।</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge p-3 fs-6 fw-normal" style={{ background: 'rgba(255,255,255,0.1)' }}>⚛️ React.js</span>
                <span className="badge p-3 fs-6 fw-normal" style={{ background: 'rgba(255,255,255,0.1)' }}>🔥 Firebase Auth</span>
                <span className="badge p-3 fs-6 fw-normal" style={{ background: 'rgba(255,255,255,0.1)' }}>🎨 Bootstrap 5</span>
                <span className="badge p-3 fs-6 fw-normal" style={{ background: 'rgba(255,255,255,0.1)' }}>🛣️ React Router</span>
              </div>
            </div>
            <div className="col-lg-4 text-center mt-4 mt-lg-0">
               <div className="display-2">🚀</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;