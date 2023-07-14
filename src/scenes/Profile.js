import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileWidget from '../components/ProfileWidget';
import GroupsWidget from '../components/GroupsWidget';
import './Profile.css';

const Profile = ({isAuth ,setIsAuth}) => {
  const userName = localStorage.getItem('user');
  return (
      <div className='profile-page'>
          <div className='profile-head'>
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
          </div>
          <div className='profile-body'>
            <div className='profile-widget'>
              <ProfileWidget userName={userName} />
            </div>
            <div className='groups-widget'>
              <GroupsWidget userName={userName} />
            </div>
          </div>
          <div className='profile-footer'>
            <Footer />
          </div>
      </div>
  );
};

export default Profile;
