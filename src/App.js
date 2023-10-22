import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from './scenes/Auth';
import Room from './scenes/Room';
import { useState, useEffect } from 'react';
import CreateRoom from './components/CreateRoom';
import Profile from './scenes/Profile';
import Settings from './scenes/Settings';
import Home  from './scenes/Home/Home';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const userId = localStorage.getItem('userId');

    if (token && user && userId) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Auth isAuth={isAuth} setIsAuth={setIsAuth}/>} />
            <Route path="/home" element={isAuth ? <Home isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" />} />
            <Route path="/room" element={isAuth ? <Room setIsAuth={setIsAuth}/> : <Navigate to="/" />} />
            <Route path="/create" element={isAuth ? <CreateRoom isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" />}  />
            <Route path="/profile" element={isAuth ? <Profile isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" />}  />
            <Route path="/settings" element={isAuth ? <Settings isAuth={isAuth} setIsAuth={setIsAuth}/> : <Navigate to="/" />} />
          </Routes>
        </ BrowserRouter>
    </div>
  );
}

export default App;
