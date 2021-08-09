import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import {apiURL} from "./Back-end/apiURl"
import './App.css';

import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import Play from "./Pages/Play"
import Four0Four from "./Pages/Four0Four"
import Video from "./PageComponents/Videos"

const API_DTBASE = apiURL()

function App() {
  const [songs, setSongs]= useState([])
  const [video, setVideo] = useState([])
   
  // const addSongs = (newSong)=>{
  //   axios.post(`${API_DTBASE}/songs`, newSong).then((res)=>{
  //     return axios.get(`${API_DTBASE}/songs`).then((res)=>{
  //       setSongs(res.data)
  //     }).catch((e)=>{
  //       console.log(e)
  //     })
  //   })
  // }
  
  const updateSongs = (newSong, id)=>{
    axios.put(`${API_DTBASE}/songs/${id}`, newSong).then((res)=>{
      const newt = [...songs]
      newt[id]= newSong
      setSongs(newt)
    }, (error) => console.log(error)
    )
    .catch((e)=> console.warm("cacth", e))
  }

  const deleteSongs = (id)=>{
    axios.delete(`${API_DTBASE}/songs/${id}`).then((res)=>{
      const del = [...songs]
      del.splice(id, 1)
      setSongs(del)
    }, (error) => console.log(error))
  }
  useEffect(()=>{
    axios.get(`${API_DTBASE}/songs`).then((res)=>{
      const {data} = res
      console.log(data)
      setSongs(data)
    })
  },[])
  // useEffect(()=>{
  //   axios.get(`${API_DTBASE}/video`).then((res)=>{
  //     const {data} = res
  //     console.log(data)
  //     setVideo(data)
  //   })
  // },[])

 
  return (
    <div className="App">
      <Router>
        <NavBar />
         <main>
           <Switch>
             <Route exact path ="/">
               <Home />
             </Route>
             <Route exact path ="/songs">
               <Index  songs={songs}/>
             </Route>
             <Route exact path ="/songs/new">
               <New  />
             </Route>
             <Route exact path ="/songs/:id">
               <Show  song={songs} deleteSongs={deleteSongs}/>
             </Route>
             <Route exact path ="/songs/:id/edit">
               <Edit song={songs} updateSongs={updateSongs}/>
             </Route>
             <Route exact path ="/songs/:id/play">
               <Play song={songs} />
             </Route>
             <Route exact path="/video">
               <Video video={video} />
             </Route>
             <Route exact path ="*">
               <Four0Four/>
             </Route>
           </Switch>
         </main>
      </Router>
    </div>
  );
}

export default App;
