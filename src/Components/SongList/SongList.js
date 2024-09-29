import React, { useEffect, useState } from "react";
import './SongList.css';
import MusicItem from "../MusicItem/MusicItem";
import { GetApi,GetSong} from "../../utils/RestApi";
import { useAuth } from "../../utils/AuthContext";

const SongList = (props)=>{

    // const {token,setToken} = useAuth();
    const token = localStorage.getItem('token');
    const [SongsList,UpdateSongList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        const getData = async()=>{
            const url1 = "/Home";
            // url1.searchParams.append('userId','66c9e1219180ec2b1c387c06');

            try{
                // console.log(token);
            const songdata = await GetSong(url1,{},token);

            UpdateSongList(songdata.files);
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
                    
                {(SongsList.length > 0) ? (
                    SongsList.map(({songName,_id}) => (
                        <MusicItem key={_id} songName={songName} songId = {_id} refresh={refresh} setRefresh={setRefresh} onCheckboxChange={props.handleCheckboxChange}  />
                    ))
                ) : (
                    <div className="songlist-name-div"> No songs available </div>
                )}
            
                    
            </div>
    );
}

export default SongList;