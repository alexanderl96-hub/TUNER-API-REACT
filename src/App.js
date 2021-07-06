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
import Four0Four from "./Pages/Four0Four"

const API_DTBASE = apiURL()

function App() {
  const [songs, setSongs]= useState([])

  useEffect(()=>{
    axios.get(`${API_DTBASE}/songs`).then((res)=>{
      const {data} = res
      setSongs(data)
    })
  })
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
               <New />
             </Route>
             <Route exact path ="/songs/:id/">
               <Show  song={songs}/>
             </Route>
             <Route exact path ="/songs/:id/edit">
               <Edit/>
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
