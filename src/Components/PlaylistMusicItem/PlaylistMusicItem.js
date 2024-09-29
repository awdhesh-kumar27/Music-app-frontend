import React, { useEffect } from "react";
import './PlaylistMusicItem.css';
import { useState } from "react";
import { useNavigate } from "react-router";
import { GetSong } from "../../utils/RestApi";
import { useParams } from "react-router";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { PatchApi } from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";
// {/* <HiArchiveBoxXMark /> */}

const PlaylistMusicItem = (props)=>{
    const Navigate =useNavigate();
    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const songPlayHandler = (event)=>{
        Navigate(`/CurrentPlaylist/song/:${props.songId}`);
    }


    const songRemoveHandler = async(event)=>{
        const id = props.songId;
        const id2 = id;
        const id1 = props.playlistId;
        const url = `/RemoveSong?id1=${id1}&id2=${id2}`;

        const result = await PatchApi({},url,token);
        props.setRefresh(!props.refresh);
        // Navigate("/Home");
    }

  

    return(
        <div className="music-item-div">

             <div className="inner-music-item-1" style={{flexGrow:"8",flexBasis:"100px"}}>
                   {props.songName}
             </div>
             <div className="inner-music-item" style={{flexGrow:"2",flexBasis:"5px"}}>
                  <button style={{backgroundColor:"black",color:"white",borderRadius:"50% 50%"}}  onClick={songPlayHandler}> Play </button>
             </div>
             <div className="inner-music-item" style={{flexGrow:"2",flexBasis:"5px"}}>
                  <button style={{backgroundColor:"black",color:"white"}}  onClick={songRemoveHandler}> <HiArchiveBoxXMark />  </button>
             </div>
        </div>
    );
}

export default PlaylistMusicItem;