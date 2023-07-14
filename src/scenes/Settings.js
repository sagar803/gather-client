import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileWidget from '../components/ProfileWidget';
import SettingsWidget from '../components/SettingsWidget';
import './Settings.css';

const Settings = ({isAuth ,setIsAuth}) => {
    const userName = localStorage.getItem('user');
    return (
        <div className='settings-page'>
          <div className='settings-head'>
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
          </div>
          <div className='settings-body'>
            <div className='profile-widget'>
              <ProfileWidget userName={userName} />
            </div>
            <div className='settings-widget'>
              <SettingsWidget userName={userName} />
            </div>
          </div>
          <div className='settings-footer'>
            <Footer />
          </div>
      </div>

    )
}

export default Settings