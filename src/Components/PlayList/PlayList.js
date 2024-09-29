import React, { useState,useEffect } from "react";
import './PlayList.css';
import NavigationBar from "../NaviGationBar/NavigationBar";
import PlayListItem from "../PlayListItem/PlayListItem";
import { GetApi,GetSong} from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";

const PlayList = ()=>{
    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const [Playlists,setPlaylists] = useState([]);
    useEffect(()=>{
        const getData = async()=>{
            const url = "/playlist";
            // url.searchParams.append('userId','dklfjadlsfkjadlsfasf');
            try{
            const data = await GetSong(url,{},token);
            // console.log(data.files);
            setPlaylists(data.files);
            // console.log);
            } catch(error){
                 throw error;
            }
        }
        getData();
    },[]);

    useEffect(()=>{

    },[Playlists]);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
            {(Playlists.length > 0) ? (
                    Playlists.map(({playlistName,_id}) => (
                        <PlayListItem key={_id} playlistName={playlistName} playlistId = {_id} />
                    ))
                ) : (
                    <div className="playlist-name-div">No Playlist available</div>
                )}
            </div>
        </div>
    );
}

export default PlayList;