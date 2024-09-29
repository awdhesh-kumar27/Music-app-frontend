import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';
import { useState,useEffect } from 'react';
import { GetSong } from '../../utils/RestApi';
import { PostApi } from '../../utils/RestApi';
import MusicItem from '../MusicItem/MusicItem';
import { useNavigate } from 'react-router';
import { useAuth } from '../../utils/AuthContext';
import { Button } from 'react-bootstrap';

function NavigationBar(props) {

  // const {token,setToken} = useAuth();
  const token = localStorage.getItem('token');
  const [Playlists,setPlaylists] = useState([]);
  const Navigate = useNavigate();

  useEffect(()=>{
      const getData = async()=>{
          const url = "/playlist";
          // url.searchParams.append('userId','66c9e1219180ec2b1c387c06');
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

  },[Playlists])
   


    const handleLinkClick = async(event,_id)=>{
            event.preventDefault();
            // const Handler=async()=>{
              // console.log(props.checkedItems,_id);
            try{
              // console.log(props.checkedItems);
              const PlaylistData = {
                 songList : props.checkedItems
              }
              const url = `/AddSongPlaylist/:${_id}`;
                const songtoPlaylist =  await PostApi(PlaylistData,url,token);
            }catch{
               
            }
        
            Navigate("/Playlists");
    }
   const logoutHandler = (event)=>{
       const res = localStorage.removeItem('token');
       Navigate("/")  
   }
  //  console.log(props.checkedItems);
  return (
    <div className='nav-bar-div'>
    <Nav variant="" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/Home" style={{ color: 'black' }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Playlists" style={{ color: 'black' }}>Playlist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/CreatePlaylist" style={{ color: 'black' }}>Create Playlist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/AddSong" style={{ color: 'black' }}>Add Song</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <div className="dropdown">
                <button className="dropbtn">Playlists</button>
                      <div className="dropdown-content">
                        {Playlists.map(({ playlistName, _id }) => (
                          <a key={_id} href={`/AddSongPlaylist/${_id}`}  onClick={(event) => handleLinkClick(event, _id) }>{playlistName}</a>
                        ))}
                  </div>
            </div>
        </Nav.Item>
        <div className='logout-button'>
            {/* <Button></Button> */}
            <Button onClick={logoutHandler}>Logout</Button>
        </div>
    </Nav>
</div>



  );
}

export default NavigationBar;