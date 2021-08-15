import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./Back-end/apiURl";
import "./App.css";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Play from "./Pages/Play";
import Four0Four from "./Pages/Four0Four";
import Library from "./Pages/Library";
import Lyric from "./Pages/Lyric";

import Video from "./PageComponents/Videos";

const API_DTBASE = apiURL();

function App() {
  const [songs, setSongs] = useState([]);
  const [video, setVideo] = useState([]);
  const [lyric, setLyric]= useState([])

  const updatedSong = (updateSong, id) => {
    axios.put(`${API_DTBASE}/songs/${id}`, updateSong).then(
      (res) => {
        const newSong = [...songs];
        newSong[id] = updateSong;
        setSongs(newSong);
      },
      (error) => console.log(error)
    );
  };

  const deleteSongs = (id) => {
    axios.delete(`${API_DTBASE}/songs/${id}`).then(
      (res) => {
        const del = [...songs];
        del.splice(id, 1);
        setSongs(del);
      },
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    axios.get(`${API_DTBASE}/songs`).then((res) => {
      const { data } = res;
      setSongs(data);
    });
  }, []);
  


  useEffect(()=>{
    axios.get(`${API_DTBASE}/videos`).then((res)=>{
      const {data} = res
      setVideo(data)
    })
  },[])
  

  useEffect(() => {
    axios.get(`${API_DTBASE}/lyrics`).then((res) =>{
      const { data } = res
      setLyric(data)
    })
  })

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/songs">
              <Index songs={songs} />
            </Route>
            <Route exact path="/songs/new">
              <New />
            </Route>
            <Route exact path="/songs/:id">
              <Show song={songs} deleteSongs={deleteSongs} />
            </Route>
            <Route exact path="/songs/:id/edit">
              <Edit song={songs} updatedSong={updatedSong} />
            </Route>
            <Route exact path="/songs/:id/play">
              <Play song={songs} />
            </Route>
            <Route exact path="/library">
              <Library song={songs} />
            </Route>
            <Route exact path="/lyrics">
              <Lyric lyric={lyric} />
            </Route>
            <Route exact path="/videos">
              <Video video={video}/>
            </Route>
            <Route exact path="*">
              <Four0Four />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
