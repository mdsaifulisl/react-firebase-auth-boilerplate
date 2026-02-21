import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="home-wrapper">
      {/* 1. Hero Section */}
      <section
        className="hero-section py-5 d-flex align-items-center"
        style={{
          minHeight: "80vh",
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div className="container text-center">
          <div
            className="d-inline-block px-4 py-2 rounded-pill mb-4"
            style={{
              backgroundColor: "#eef2ff",
              color: "var(--primary-color)",
              fontWeight: "600",
            }}
          >
            ✨ Secure & Fast Authentication
          </div>
          <h1
            className="display-2 fw-bold mb-4"
            style={{ letterSpacing: "-2px", lineHeight: "1.1" }}
          >
            Elevate Your{" "}
            <span style={{ color: "var(--primary-color)" }}>Security</span>{" "}
            <br /> With Firebase
          </h1>
          <p
            className="lead text-muted mb-5 mx-auto"
            style={{ maxWidth: "700px", fontSize: "1.25rem" }}
          >
            একটি শক্তিশালী এবং আধুনিক রিঅ্যাক্ট অ্যাপ্লিকেশন যা আপনার ডেটা
            সুরক্ষায় ফায়ারবেজ ব্যবহার করে। সোশ্যাল লগইন এবং প্রটেক্টেড রুট সহ
            সম্পূর্ণ ফিচার প্যাকড।
          </p>
          {user ? (
            <div className="d-inline-block">
              <Link
                to="/dashboard"
                className="btn-common btn-primary-custom shadow-lg"
                style={{ minWidth: "220px" }}
              >
                Explore Dashboard
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <Link
                to="/register"
                className="btn-common btn-primary-custom shadow-lg"
                style={{ minWidth: "220px" }}
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="btn-common btn-google"
                style={{ minWidth: "220px" }}
              >
                Explore Login
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 2. Features Section (Using Box & Icons) */}
      <section className="features-section py-5 bg-white">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="p-5 rounded-4 h-100 border-0 shadow-sm text-center"
                style={{ backgroundColor: "#fcfcfe" }}
              >
                <div className="display-4 mb-3">🛡️</div>
                <h3 className="fw-bold mb-3">Firebase Auth</h3>
                <p className="text-muted">
                  ইমেইল এবং পাসওয়ার্ডের মাধ্যমে নিরাপদ রেজিস্ট্রেশন এবং লগইন
                  সিস্টেম।
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-5 rounded-4 h-100 text-center text-white shadow-lg"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <div className="display-4 mb-3">🚀</div>
                <h3 className="fw-bold mb-3">Instant Sync</h3>
                <p className="opacity-75">
                  রিয়েল-টাইম ডেটা সিঙ্ক্রোনাইজেশন যা আপনার অ্যাপকে করে তুলবে
                  সুপার ফাস্ট।
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-5 rounded-4 h-100 border-0 shadow-sm text-center"
                style={{ backgroundColor: "#fcfcfe" }}
              >
                <div className="display-4 mb-3">🔑</div>
                <h3 className="fw-bold mb-3">Social OAuth</h3>
                <p className="text-muted">
                  গুগল বা গিটহাব অ্যাকাউন্ট ব্যবহার করে ওয়ান-ক্লিক লগইন সুবিধা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-5" style={{ backgroundColor: "#1e293b" }}>
        <div className="container py-4 text-center text-white">
          <div className="row g-4">
            <div className="col-md-4">
              <h2
                className="display-4 fw-bold"
                style={{ color: "var(--primary-color)" }}
              >
                99.9%
              </h2>
              <p className="text-uppercase tracking-widest opacity-50">
                Uptime
              </p>
            </div>
            <div className="col-md-4">
              <h2
                className="display-4 fw-bold"
                style={{ color: "var(--primary-color)" }}
              >
                256-bit
              </h2>
              <p className="text-uppercase tracking-widest opacity-50">
                Encryption
              </p>
            </div>
            <div className="col-md-4">
              <h2
                className="display-4 fw-bold"
                style={{ color: "var(--primary-color)" }}
              >
                Free
              </h2>
              <p className="text-uppercase tracking-widest opacity-50">
                Open Source
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section (Box Layout) */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="p-5 bg-white rounded-5 shadow-sm border-start border-5"
                style={{ borderColor: "var(--primary-color)" }}
              >
                <h2 className="display-5 fw-bold mb-4">
                  Why Security Matters?
                </h2>
                <p className="text-muted fs-5">
                  একটি ওয়েব অ্যাপ্লিকেশনের সবচেয়ে গুরুত্বপূর্ণ অংশ হলো তার
                  সিকিউরিটি। আমরা ফায়ারবেজ ব্যবহার করে নিশ্চিত করি যে ইউজারের
                  কোনো তথ্য যেন ভুল হাতে না পড়ে।
                </p>
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2 text-primary">✔</span> Protected
                    Routes
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2 text-primary">✔</span> Auto Login
                    Persistence
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-2 text-primary">✔</span> Secure Sign Out
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="display-1">🔒</div>
              <h3 className="fw-bold mt-3">Advanced Protection</h3>
              <p className="text-muted">
                আপনার পাসওয়ার্ড সরাসরি ফায়ারবেজ হ্যান্ডেল করে, কোনো কাস্টম
                ব্যাকএন্ডের প্রয়োজন নেই।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-5 mb-5">
        <div
          className="container py-5 rounded-5 text-center shadow-xl text-white"
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          }}
        >
          <h2 className="display-4 fw-bold mb-4">Ready to get started?</h2>
          <p
            className="fs-5 opacity-75 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            এখনই আপনার অ্যাকাউন্ট তৈরি করুন এবং ফায়ারবেজ অথেনটিকেশনের নতুন
            অভিজ্ঞতায় যুক্ত হোন।
          </p>
          <Link
            to="/register"
            className="btn-common btn-primary-custom px-5 py-3 fs-5 mx-auto"
            style={{ maxWidth: "300px" }}
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
