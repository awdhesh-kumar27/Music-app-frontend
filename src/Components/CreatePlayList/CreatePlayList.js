import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PostApi } from "../../utils/RestApi";
import './CreatePlayList.css';
import NavigationBar from "../NaviGationBar/NavigationBar";
import { useAuth } from "../../utils/AuthContext";


const CreatePlayList =  ()=>{

    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const [PlayListName, SetPlayListName] = useState("");
    const Navigate = useNavigate();

    const handlePlayListName = (event) => {
            SetPlayListName(event.target.value);
    };

    const handleAddPlayList = async(event) => {
       
        // event.prevent.default();
        
        try{
            const PlaylistData = {
                //  userId : "dklfjadlsfkjadlsfasf",
                 playlistName : PlayListName,
                 songList : []
            }
            console.log("createPlaylist",PlaylistData);
            const isPlaylistCreated =  await PostApi(PlaylistData,"/CreatePlaylist",token);
            console.log(isPlaylistCreated.message);
             SetPlayListName("");
        } catch(err){

        }
        
        
        Navigate("/Playlists");
        
        // console.log(response);
        
        
    };

    return (
        <div>
            <NavigationBar></NavigationBar>
            
        <div className="create-playlist-div">
        <label style={{color:"red",fontSize:"24px",fontFamily:"sans-serif"}}>Playlist Name</label>
            <br></br>       
            <input type="string"  style={{width:"300px"}} onChange={handlePlayListName}   required></input>
            <br></br>
            <button  style={{backgroundColor:"black",color:"white", width:"120px",height:"40px"}} onClick={handleAddPlayList}> Create Playlist</button>
        </div>
        </div>
    );
}

export default CreatePlayList;