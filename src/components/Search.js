import React, { useState } from "react";
import './Search.css';
import { useMediaQuery } from "@mui/material";
import {Close} from '@mui/icons-material';
import SearchResult from "./SearchResult";

const Search = ({ toggleMenu, setJoinedRoom}) => {
    const isNonMobileScreens = useMediaQuery("(min-width:850px)");
    const stringifyRoom = localStorage.getItem('rooms');
    const rooms = JSON.parse(stringifyRoom);
    const [search, setSearch] = useState('');
    const filteredRooms = rooms.filter((room) => room.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="searchContainer">
            <div className='search'>                
                {!isNonMobileScreens && <Close className="icon" onClick={toggleMenu}/>}
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type='text' 
                    placeholder="Search..." 
                    />
                <div className="clearButton" onClick={() => setSearch('')}>Clear</div>
            </div>
            {search && (
                <div className="searchResult">
                    {filteredRooms.length !== 0 ? (
                        filteredRooms.map((room) => (
                            <div
                                key={room._id}
                                onClick={() => {
                                    setJoinedRoom({name: room.name, id: room._id});
                                }}
                            >
                                <SearchResult
                                    room={room}
                                />
                            </div>
                        ))
                    ) : (
                    <p>No room found...</p>
                    )}
                </div>
            )}
        </div>

    )
}

export default Search