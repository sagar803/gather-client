import { Box, useMediaQuery } from "@mui/material";
import React , { useEffect, useState } from "react";
import io from 'socket.io-client'
import Chat from '../components/Chat';
import Menu from '../components/Menu';

const socket = io.connect(`${process.env.REACT_APP_API}`);

const Room = ({setIsAuth}) => {
    const isNonMobileScreens = useMediaQuery("(min-width:850px)");
    const userName = localStorage.getItem('user');
    const [showMenu, setShowMenu] = useState(true);
   // const [prevJoinedRoom, setPrevJoinedRoom] = useState({name: "", id: ""});
    const [joinedRoom, setJoinedRoom] = useState({name: "", id: ""});

    const toggleMenu = () => {
        console.log("toggeled")
        setShowMenu(!showMenu);
    }
    
    /*
    joinRoom function implemented inside useEffect because of late rendering issues
    const joinRoom = () => {
        if (userName!== "" && joinedRoom.id !== ""){
            console.log(joinedRoom)
            socket.emit("join_room", {userName, room : joinedRoom.id})
            setShowMenu(false);
        }
    }
    */

    /*
    The return statement inside the useEffect function is used to define the cleanup
        logic that should be executed when the component unmounts or when the dependencies 
        specified in the useEffect array change.
    When the joinedRoom state value changes, the useEffect hook will be re-executed. 
        In that case, the cleanup function defined in the previous execution of the useEffect 
        hook will be called before the effect is re-executed.
    When the cleanup function is called, it will have access to the previous state of joinedRoom. 
        The cleanup function captures the state at the time it was defined, so it will refer to 
        the previous value of joinedRoom.
    In your code, when the cleanup function emits the leave_room event, it will refer to the 
        previous value of joinedRoom because that's the state value that was captured when the 
        cleanup function was defined. Even if joinedRoom has a new value when the cleanup function 
        is executed, the cleanup function will still have access to the previous value.
    This behavior ensures that the appropriate leave_room event is emitted for the previously 
        joined room before the effect is re-executed with the new value of joinedRoom.
    */
    useEffect(() => {
        if (userName !== "" && joinedRoom.id !== "") {
          console.log(joinedRoom);
          socket.emit("join_room", { userName, room: joinedRoom.id });
          setShowMenu(false);
        }
      
        return () => {
          if (joinedRoom.id !== "") {
            socket.emit("leave_room", {userName, room: joinedRoom.id });
          }
        };
    // eslint-disable-next-line
      }, [joinedRoom]);


    return (
        <Box 
            height="100%"
            width="100%"
            display={isNonMobileScreens ? "flex" : "block"}
            justifyContent="space-between"
        >
            { !isNonMobileScreens ? (
                    showMenu && (
                        <Box 
                            position="absolute"
                            zIndex="1"
                            height="100%"
                            width='100%'
                        >
                            <Menu toggleMenu={toggleMenu} setJoinedRoom={setJoinedRoom} joinedRoom={joinedRoom}/>
                        </Box>
                    )
            ) : (
                <Box 
                    flexBasis={isNonMobileScreens ? "25%" : undefined}
                >
                    <Menu toggleMenu={toggleMenu} setJoinedRoom={setJoinedRoom} joinedRoom={joinedRoom}/>
                </Box>
            ) 
        }
            <Box 
                height="100%"
                flexBasis={isNonMobileScreens ? "75%" : undefined}
            >
                <Chat setIsAuth={setIsAuth} toggleMenu={toggleMenu} socket={socket} userName={userName} joinedRoom={joinedRoom} />
            </Box>
        </Box>
    )
}

export default Room;