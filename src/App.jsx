// Hooks and Context
import { useContext } from "react";
import { Router, Routes, Route } from "react-router-dom";

// Styles
import "./styles/all.css";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// Pages
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import About from "./pages/about/About";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFounds"; 

// providers
import { AuthContext } from "./providers/AuthProvider.jsx";

function App() {

  
// Testing purposes
//  const user = {
//     displayName: "Saiful Islam",
//     email: "abc@gmail.com",
//     photoURL: null,
//     providerData: [{ providerId: 'google.com' }] 
//   };
 // const user = null;


  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
  };

  return (
    <>
      <ScrollToTop />
      {/* Header */}
      <Header user={user} handleLogout={handleLogout} />

      {/* Main */}
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute user={user}><Dashboard user={user} handleLogout={handleLogout} /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
