import React from "react";
import './PlayListItem.css';
import { useNavigate } from "react-router";
import { DeleteApi } from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";
const PlayListItem = (props)=>{
    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const navigate =useNavigate();
   
    const DeletePlaylistHandler = async (event)=>{
        event.preventDefault();
        const id = props.playlistId;

        const url = `/DeletePlaylist/:${id}`;

        const result = await DeleteApi({},url,token);
        navigate("/Home");
    }
    return(
        <div className="music-item-div">
           
             <div className="inner-music-item-1" style={{flexGrow:"6",flexBasis:"200px"}}>
                   
                   <a href={`/CurrentPlaylist/${props.playlistId}`} style={{color:"black",textDecoration:"None",fontSize:"20px"}} >{props.playlistName}</a>
             </div>
             <div className="inner-music-item" style={{flexGrow:"2",flexBasis:"100px"}}>
                  <button style={{backgroundColor:"black",color:"white"}}  onClick={DeletePlaylistHandler}> Delete </button>
             </div>
        </div>
    );
}

export default PlayListItem;