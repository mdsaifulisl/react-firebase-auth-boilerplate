import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const featuresList = [
    {
      icon: "🔒",
      title: "Secure Authentication",
      desc: "আমরা Firebase SDK ব্যবহার করি যা ইন্ডাস্ট্রি স্ট্যান্ডার্ড সিকিউরিটি নিশ্চিত করে। ইউজারের পাসওয়ার্ড সরাসরি ফায়ারবেজ হ্যান্ডেল করে।",
      badge: "Security"
    },
    {
      icon: "🌐",
      title: "Social Integration",
      desc: "Google এবং GitHub এর মাধ্যমে ওয়ান ক্লিক সোশ্যাল লগইন সিস্টেম। কোনো এক্সট্রা পাসওয়ার্ড মনে রাখার ঝামেলা নেই।",
      badge: "OAuth"
    },
    {
      icon: "⚡",
      title: "React Router Support",
      desc: "পেজ রিফ্রেশ ছাড়াই সুপার ফাস্ট নেভিগেশন। ইউজার এক্সপেরিয়েন্স হবে একদম স্মুথ এবং আধুনিক।",
      badge: "Speed"
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      desc: "আপনার ডিভাইস যাই হোক না কেন মোবাইল, ট্যাবলেট বা ডেস্কটপ সবখানে ইন্টারফেস থাকবে একদম নিখুঁত।",
      badge: "Design"
    },
    {
      icon: "🛠️",
      title: "Auth Persistence",
      desc: "পেজ রিফ্রেশ দিলেও ইউজার লগআউট হয়ে যাবে না। সেশন ম্যানেজমেন্ট স্বয়ংক্রিয়ভাবে ফায়ারবেজ হ্যান্ডেল করে।",
      badge: "System"
    },
    {
      icon: "🛡️",
      title: "Protected Routes",
      desc: "লগইন করা ছাড়া প্রাইভেট পেজ এক্সেস করা অসম্ভব। আমরা সিকিউরিটি লেয়ার দিয়ে ডেটা প্রটেক্ট করি।",
      badge: "Private"
    }
  ];

  return (
    <div className="features-wrapper py-5" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container py-5">
        
        {/* Header Section */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
          <span className="badge px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: '#eef2ff', color: 'var(--primary-color)', fontSize: '14px' }}>
            Core Capabilities
          </span>
          <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-1.5px' }}>
            Packed with <span style={{ color: 'var(--primary-color)' }}>Powerful</span> Features
          </h1>
          <p className="fs-5 text-muted">
            আমাদের সিস্টেমটি এমনভাবে ডিজাইন করা হয়েছে যাতে এটি ডেভেলপারের জন্য সহজ এবং ইউজারের জন্য নিরাপদ হয়। নিচে আমাদের প্রধান ফিচারগুলো তুলে ধরা হলো।
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {featuresList.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="p-5 bg-white rounded-5 h-100 shadow-sm feature-box-custom border-0" style={{ transition: '0.3s' }}>
                <div className="mb-4 d-flex justify-content-between align-items-start">
                  <div className="display-4">{feature.icon}</div>
                  <span className="badge rounded-pill" style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '12px' }}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="fw-bold mb-3 h4">{feature.title}</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-5 p-5 rounded-5 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #4f46e5 100%)' }}>
          <h2 className="fw-bold mb-3">Ready to experience these features?</h2>
          <p className="mb-4 opacity-75">এখনই একটি ফ্রি অ্যাকাউন্ট তৈরি করে আমাদের সিস্টেমটি পরীক্ষা করুন।</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/register" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold text-primary shadow">
              Register Now
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold">
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;