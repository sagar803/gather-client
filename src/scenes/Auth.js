import React , { useState } from "react";
import homeImage from '../assets/home.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

const Auth = ({setAuth}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [pageType, setPageType] = useState("login");
    const [credentials , setCredentials ] = useState({fullName : '', email : '' , password : ''});
     
    const togglePageType = () => {
        if (pageType === "login"){
            setPageType("register");
        }
        else{
            setPageType("login");
        }
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${process.env.REACT_APP_API}/auth/${pageType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            }) 
            if (res.ok){
                const data = await res.json();
                localStorage.setItem("token" , data.token);
                localStorage.setItem("userId" , data.user._id);
                localStorage.setItem("user" , data.user.fullName);
                setAuth(true);
                navigate('/profile');
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    return (
        <div className="auth-body">
            <Header />
            <div className='main'>
                <div className='authContainer'>
                <h1>Connect and Chat</h1>
                
                {
                    (pageType === "register") && (
                        <input 
                        value={credentials.fullName}
                        onChange={(e) => setCredentials({ ...credentials, fullName: e.target.value })}
                        type='text' 
                        placeholder="Enter you name.." 
                    />    
                    )
                }
                <input 
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    type='text' 
                    placeholder="Email" 
                />
                <input 
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
                    type='password' 
                    placeholder="Password" 
                    />
                <button 
                    onClick={handleSubmit}
                >
                    {loading 
                        ? <CircularProgress size={20} sx={{color:"white"}} />
                        : (pageType === "login") ? "Login" : "Register"
                    }
                </button>
                <p
                    onClick={togglePageType}
                >{(pageType === "login") ? "Register here..." : "Login here...."}</p>
                </div>
                <img src={homeImage} alt="chat vector" />
            </div>

            <Footer />
        </div>
    )
}

export default Auth;