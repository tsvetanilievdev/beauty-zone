import './App.css';

import requester from './services/requester.js';

import { AuthContext } from './contexts/AuthContext.js'

import { Header } from './components/Header/Header.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';
import { Home } from './components/Home/Home.js';
import { Route, Routes } from 'react-router';
import { Procedures } from './components/Procedures/Procedures.js';
import { ProcedureDetails } from './components/Procedures/ProcedureDetails.js';
import { useState } from 'react';
import { saveUserData } from './utils/util.js';

window.api = requester;


function App() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    authToken: "",
  })
  
  const onLogin = (data) => {
    let userData = saveUserData(data);
    setUser(userData);
  }


  return (
    <AuthContext.Provider value={{onLogin}}>
      <div className="App">
        <Header email={user.email} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/procedures" exact element={<Procedures />} />
          <Route path="/procedures/:procedureId" element={<ProcedureDetails />} />

          {/* // to dooooo.. */}
          <Route path="/book" element={<ProcedureDetails />} />
          <Route path="/my-bookings" element={<ProcedureDetails />} />
          <Route path="/become-a-member" element={<ProcedureDetails />} />
          <Route path="/contact" element={<ProcedureDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
