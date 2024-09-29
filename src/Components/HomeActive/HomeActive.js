import React from "react";
import './HomeActive.css';
import NavigationBar from "../NaviGationBar/NavigationBar";
import SongList from "../SongList/SongList";
import { useState } from "react";
import { useAuth } from "../../utils/AuthContext";

const HomeActive = ()=>{
    const [checkedItems, setCheckedItems] = useState([]);
    const handleCheckboxChange = (id,songName, isChecked) =>{
        setCheckedItems(prevState => {
            // Remove the item if it already exists
            const filteredItems = prevState.filter(item => item.songId !== id);
    
            // Add the new item if it is checked
            if (isChecked) {
                return [
                    ...filteredItems,
                    {
                        songId: id,
                        songName: songName
                    }
                ];
            }
    
            return filteredItems;
        });
    };
    
    // const checkedItemsList = Object.keys(checkedItems).filter(id => checkedItems[id]);

    return (
        <div className="home-active-div">
            <NavigationBar  checkedItems={checkedItems}></NavigationBar>
            <SongList handleCheckboxChange={handleCheckboxChange}></SongList>
        </div>
    );
}

export default HomeActive;