import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import MapingVideo from "./MapingVideo";

// const API_DTBASE = apiURL();
// console.log(API_DTBASE)

export default function Video({video}) {
  // const [video, setVideo] = useState([]);

  // useEffect(()=>{
  //     axios.get(`${API_DTBASE}/videos`).then((res)=>{
  //       const {data} = res
  //       console.log(data.)
  //       setVideo(data)
  //     })
  //   },[])

  return (
    <div>
      <tbody>{video.map((vid)=> {
                    return <MapingVideo video={vid} id={vid.id} key={vid.id}/>
                })}</tbody>
    </div>
  );
}
