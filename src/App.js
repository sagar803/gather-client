import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from './scenes/Auth';
import Room from './scenes/Room';
import { useState } from 'react';


function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth setAuth={setAuth}/>} />
            <Route
              path="/room"
              element={auth ? <Room /> : <Navigate to="/" />}
            />
          </Routes>
        </ BrowserRouter>
    </div>
  );
}

export default App;
