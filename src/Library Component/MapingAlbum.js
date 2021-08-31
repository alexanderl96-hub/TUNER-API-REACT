import React from "react";
import {Link} from 'react-router-dom'

export default function MapingAlbum({ album, id , covers}) {

 const image = "https://earthobservatory.nasa.gov/ContentFeature/ColorImage/images/fulldiskwest_goe_2013257_crop_720.jpg"
        
  return (
    <div className="dentro">
      <div className="productCard">
        <h2>{album.name}</h2>
        {covers ?
        <img
          src= {album.covers}
          alt={album.name}
          style={{ width: "230px", height: "200px" }}
        /> : <img
        src= {image}
        alt='new'
        style={{ width: "230px", height: "200px" }}
      />}
        <h2>Year-release</h2>
        <h2>{album.years}</h2>
      </div>
    </div>
  );
}