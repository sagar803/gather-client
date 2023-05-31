import './App.css';
import {useState} from 'react'
import io from 'socket.io-client'
import Chat from './components/Chat';
import Header from './components/Header';
import Footer from './components/Footer';
import homeImage from './assets/home.jpg'
const socket = io.connect(`${process.env.REACT_APP_API}`);

function App() {
  const [userName , setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName!== "" && room !== ""){
      socket.emit("join_room", {userName, room})
      setShowChat(true)
    }
  }
  return (
    <div className="App">
        {!showChat && <Header />}
        {!showChat 
          ? (
              <div className='home'>
                <div className='joinChatContainer'>
                  <h1>Connect and Chat</h1>
                  
                  <input 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                    type='text' 
                    placeholder="Username" 
                    />
                  <input 
                    value={room}
                    onChange={(e) => setRoom(e.target.value)} 
                    type='text' 
                    placeholder="Room ID" 
                    />
                  <button onClick={joinRoom}>Join</button>
                </div>
                <img src={homeImage} alt="chat vector" />
              </div>
            )
          : <Chat setShowChat={setShowChat} socket={socket} userName={userName} room={room} />
        }
        {!showChat && <Footer />}
    </div>
  );
}

export default App;
