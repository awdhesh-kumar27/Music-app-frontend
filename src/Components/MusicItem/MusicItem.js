import React, { useEffect } from "react";
import './MusicItem.css';
import { useState } from "react";
import { useNavigate } from "react-router";
import { GetSong } from "../../utils/RestApi";
import { useParams } from "react-router";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { DeleteApi } from "../../utils/RestApi";
// {/* <HiArchiveBoxXMark /> */}
import { useAuth } from "../../utils/AuthContext";

const MusicItem = (props)=>{
    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const Navigate =useNavigate();
    
    const songPlayHandler = (event)=>{
        Navigate(`song/:${props.songId}`);

    }


    const songDeleteHandler = async(event)=>{
        const id = props.songId;

        const url = `/DeleteSong/:${id}`;

        const result = await DeleteApi({},url,token);
        props.setRefresh(!props.refresh);
        // Navigate("/Home");
    }

    const handleChange = (event) => {
        props.onCheckboxChange(props.songId, props.songName, event.target.checked);
    };

    return(
        <div className="music-item-div">
             <input type="checkbox"  value={props.songId} class="song-checkbox" onChange={handleChange}></input>
             <div className="inner-music-item-1" style={{flexGrow:"8",flexBasis:"100px"}}>
                   {props.songName}
             </div>
             <div className="inner-music-item" style={{flexGrow:"2",flexBasis:"5px"}}>
                  <button style={{backgroundColor:"black",color:"white",borderRadius:"50% 50%"}}  onClick={songPlayHandler}> Play </button>
             </div>
             <div className="inner-music-item" style={{flexGrow:"2",flexBasis:"5px"}}>
                  <button style={{backgroundColor:"black",color:"white"}}  onClick={songDeleteHandler}> <HiArchiveBoxXMark />  </button>
             </div>
        </div>
    );
}

export default MusicItem;