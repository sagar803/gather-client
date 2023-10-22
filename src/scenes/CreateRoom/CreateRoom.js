import React from 'react'
import CreateRoomForm from '../../components/CreateRoomForm'
import Navbar from '../../components/Navbar'
import './CreateRoom.css'

export const CreateRoom = ({isAuth, setIsAuth}) => {
  return (
    <>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <div className='create-room-form-container'>
          <CreateRoomForm />
        </div>
    </>
  )
}
export default CreateRoom;