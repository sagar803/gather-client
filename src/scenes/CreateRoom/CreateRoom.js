import React from 'react'
import CreateRoomForm from '../../components/CreateRoomForm'
import Navbar from '../../components/Navbar'
import './CreateRoom.css'

export const CreateRoom = ({isAuth, setIsAuth}) => {
  return (
    <>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <div className='create-room-body'>
            <div className='chat-room-description'>
              <h1 className='gradient-heading'>Create Your Own Chatroom . . . . .</h1>
              <p>Empower your community with our user-friendly "Create Your Chatroom" page. Simply fill out the form and launch your personalized chat space. Instant connection, seamless conversations—your chatroom, your rules!</p>
            </div>
            <div className="create-chat-room-form">
              <CreateRoomForm />
            </div>
        </div>
    </>
  )
}
export default CreateRoom;