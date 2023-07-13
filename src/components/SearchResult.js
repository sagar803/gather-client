import React from "react";
import './SearchResult.css'
import LockIcon from '@mui/icons-material/Lock';
import { Avatar} from '@mui/material';

const SearchResult = ({room}) => {
    return (
        <div className="user">
            <Avatar style={{ width: '50px', height: '50px', marginRight:"5px" }} />
            <div className="meta-data">
                {room.isPublic  && <LockIcon className="lock-icon"/>}
                <h3 className="user-name">{room.name}</h3> 
                <p className="user-email">{room.description}</p>
            </div>
        </div>

    )
}

export default SearchResult