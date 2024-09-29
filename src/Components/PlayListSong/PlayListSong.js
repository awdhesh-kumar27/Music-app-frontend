import React from "react";
import "./PlayListSong.css";
import NavigationBar from "../NaviGationBar/NavigationBar";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { GetApi } from "../../utils/RestApi";
import PlaylistMusicItem from "../PlaylistMusicItem/PlaylistMusicItem";
import { useAuth } from "../../utils/AuthContext";
const PlayListSong = (props)=>{
    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const {id} = useParams();
    const [SongsList,UpdateSongList] = useState([]);
     const [playListName,SetPlayListName] = useState("");
     const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        const getData = async()=>{
            const url1 = `/CurrentPlaylist/:${id}`;
            // console.log(url1);
            try{
            const songdata = await GetApi(url1,{},token);
            // console.log(songdata.data);
            SetPlayListName(songdata.data.playListName);
            UpdateSongList(songdata.data.songsList);
            
            } catch(error){
                 throw error;
            }
        }
        getData();
    },[refresh]);

    useEffect(()=>{

    },[SongsList]);
   return (
    <div>
         <NavigationBar></NavigationBar>
         <div className="playlist-name-div">{playListName}</div>
         {(SongsList.length > 0) ? (
                    SongsList.map(({songName,songId,_id}) => (
                        <PlaylistMusicItem key={_id} songName={songName} songId = {songId} playlistId = {id} refresh={refresh} setRefresh ={setRefresh}  />
                    ))
                ) : (
                    <p>No songs available</p>
          )}
    </div>
   );
}

export default PlayListSong;