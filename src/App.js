import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from './scenes/Auth';
import Room from './scenes/Room';
import { useState, useEffect } from 'react';
import CreateRoom from './components/CreateRoom';
import Profile from './scenes/Profile';


function App() {
  const [auth, setAuth] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const userId = localStorage.getItem('userId');

    if (token && user && userId) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth setAuth={setAuth}/>} />
            <Route
              path="/room"
              element={auth ? <Room /> : <Navigate to="/" />}
            />
            <Route 
              path="/create" 
              element={auth ? <CreateRoom /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={auth ? <Profile /> : <Navigate to="/" />}
            />
          </Routes>
        </ BrowserRouter>
    </div>
  );
}

export default App;
