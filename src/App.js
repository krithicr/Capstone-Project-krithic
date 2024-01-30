// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/js/SignIn';
import SignUp from './components/js/SignUp';
import HomePage from './components/js/HomePage';
import { NavbarProvider } from './components/js/NavbarContext';
import AdminLandingPage from './components/js/AdminLandingPage';
import Jurisdiction from './components/js/Jurisdiction';
import JurisdictionForm from './components/js/JurisdictionForm';
import CustomNavbar from './components/js/Navbar';
import EditJurisdictionForm from './components/js/EditJurisdictionForm';
import OfficerForm from './components/js/OfficerForm';
import OfficerDisplay from './components/js/OfficerDisplay';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const handleSignUp = (userData) => {
 
    console.log('Sign-up data:', userData);
    
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/" element={<HomePage />} />

        {/* NavbarProvider only for admin-related routes */}
        <Route
          path="/admin/*"
          element={
            <NavbarProvider>
              <CustomNavbar />
              <Routes>
                <Route path="/" element={<AdminLandingPage user={user} onSignOut={handleSignOut} />} />
                <Route path="jurisdiction" element={<Jurisdiction />} />
                <Route path="add-jurisdiction" element={<JurisdictionForm />} />
                <Route path="jurisdiction/edit/:jurisdictionId" element={<EditJurisdictionForm />} />
                <Route path="add-officer" element={<OfficerForm />} />
                <Route path="officers" element={<OfficerDisplay />} />
              </Routes>
            </NavbarProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
