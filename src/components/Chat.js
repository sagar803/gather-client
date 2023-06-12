import React, { useState, useEffect } from "react";
import ScrollToBottom from 'react-scroll-to-bottom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    Menu as MenuIcon,
    LogOut ,
    Send
} from 'react-feather';

import './Chat.css'
import { useNavigate } from "react-router-dom";

const Chat = ({ toggleMenu, socket, userName, room}) => {
    const navigate = useNavigate();
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);
    
    useEffect(() => {
        setMessageHistory([]);
    }, [room]);
      
    const sendMessage = async () => {
        if (currentMessage !==  ""){
            const messageData = {
                room : room,
                author : userName,
                message : currentMessage,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() 
            }
            await socket.emit('send_message', messageData)
            setMessageHistory((msg) => [...msg, messageData])
            setCurrentMessage('')
        }
    }

    const logout = () => {
        socket.emit("leave_room", {userName, room})
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    }
    useEffect(() => {
        socket.on("joined_room", (data)=> {
            toast(`${data.userName} has entered the room`, { autoClose: 2000 });

        })
        socket.on("left_room", (data)=> {
            toast(`${data.userName} has left the room`, { autoClose: 2000 });
        })
        socket.on("recieve_message", (data) => {
            setMessageHistory((msg) => [...msg, data])
        })
    }, [socket])

    return (
        <div className="chat-window">
            <div className="chat-header">
                <MenuIcon className="pointer" onClick={toggleMenu}/>
                {room ? (
                    <p>Joined room '{room}' as {userName}</p>
                ) : (
                    <p>Enter any room to start conversation</p>
                )}
                <LogOut className="pointer logout" onClick={logout}/>
            </div>
            <div className="chat-body" >
                <ScrollToBottom className="message-container">
                    <div className="disclaimer">
                        <p>Disclaimer : The messages exchanged within the live room are not recorded, logged, or stored in any form. Once the session ends or the chat is closed, the conversation disappers.</p>
                        <hr/>
                    </div>
                    {messageHistory.map((messageContent) => {
                        return (
                            <div className="message" id={userName === messageContent.author? "you" : "other"}>
                                <div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-meta">
                                        <p id="time">{messageContent.time}</p>
                                        <p id="author">{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </ScrollToBottom>
            </div>
            {
                room && (
                    <div className="chat-footer">
                        <input
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)} 
                            type="text" 
                            placeholder="Send a message...." 
                            onKeyPress={(event)=> (event.key === 'Enter') && sendMessage()}
                        />
                        <button onClick={sendMessage}><Send /></button>
                    </div>
                )
            }
            <ToastContainer className="custom-toast-container"/>
        </div>
    )
}

export default Chat