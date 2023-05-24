import React, { useState, useEffect } from "react";
import ScrollToBottom from 'react-scroll-to-bottom'

const Chat = ({socket, userName, room}) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);

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

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessageHistory((msg) => [...msg, data])
        })
    }, [socket])

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Joined room '{room}' as {userName}</p>
            </div>
            <div className="chat-body" >
                <ScrollToBottom className="message-container">
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
            <div className="chat-footer">
                <input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)} 
                    type="text" 
                    placeholder="Send a message...." 
                    onKeyPress={(event)=> (event.key === 'Enter') && sendMessage()}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat