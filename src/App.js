import './App.css';

import requester from './services/beautyZoneService';

import { Route, Routes } from 'react-router';
import { AuthContext } from './contexts/AuthContext.js'
import { useState } from 'react';

import { saveUserData } from './utils/util.js';

import { Header } from './components/Header/Header.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';
import { Home } from './components/Home/Home.js';
import { Procedures } from './components/Procedures/Procedures.js';
import { ProcedureDetails } from './components/Procedures/ProcedureDetails.js';
import { Logout } from './components/Logout/Logout.js';
import { Booking } from './components/Booking/Booking';
import { MyBookings } from './components/MyBookings/MyBookingsList';
import { EditBooking } from './components/Booking/EditBooking';

window.api = requester;


function App() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    authToken: "",
  })

  const onAuth = (data) => {
    let userData = saveUserData(data);
    setUser(userData);
  }

  return (
    <AuthContext.Provider value={{ user, onAuth }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/procedures" exact element={<Procedures />} />
          <Route path="/procedures/:procedureId" element={<ProcedureDetails />} />
          <Route path="/booking" element={<Booking />} />

          {/* // to dooooo.. */}
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-bookings" element={<MyBookings />}/>
          <Route path="/my-bookings/:id" element={<EditBooking />} />
          <Route path="/become-a-member" element={<ProcedureDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
