import React  from "react";
import "./Menu.css";
import { X as CloseIcon} from "react-feather";

const Menu = ({toggleMenu, joinRoom, setRoom, room}) => {

    return (
        <div className='menuContainer'>
            <CloseIcon className="closeIcon" onClick={toggleMenu}/>
            <hr />
            <div className='joinRoom'>                
                <input 
                    value={room}
                    onChange={(e) => setRoom(e.target.value)} 
                    type='text' 
                    placeholder="Room ID" 
                    />
                <button onClick={joinRoom}>Join</button>
            </div>
        </div>
    )
}

export default Menu;