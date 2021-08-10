import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../Back-end/apiURl";

const API_DTBASE = apiURL();

export default function EditSongs(props) {
  let { id } = useParams();
  let history = useHistory();
  // const [valt, setValt] = useState([])

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    photo: "",
    time: "",
    mp3: "",
    is_favorite: false,
  });

  const handleInput = (e) => {
    const { value } = e.target;
    setSong({ ...song, [e.target.id]: value });
  };

  const handleCheck = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    props.updatedSong(song, id);
    history.push("/songs");
  };

  useEffect(() => {
    axios
      .get(`${API_DTBASE}/songs/${id}`)
      .then((res) => {
        const { data } = res;
        setSong(data);
      })
      .catch(() => {
        history.push("/not-found");
      });
  }, [id, history]);

  return (
    <div>
      <div>
        <Link to={`/songs`}>
          <button className="songsbt">Back</button>
        </Link>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={handleInput}
              value={song.name}
              className="editform"
            ></input>
            <label htmlFor="artist">Artist:</label>
            <input
              id="artist"
              type="text"
              onChange={handleInput}
              value={song.artist}
              className="editform"
            ></input>
            <label htmlFor="album">Album:</label>
            <input
              id="album"
              type="text"
              onChange={handleInput}
              value={song.album}
              className="editform"
            ></input>
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="text"
              onChange={handleInput}
              value={song.photo}
              className="editform"
            ></input>
            <label htmlFor="time">Time:</label>
            <input
              id="time"
              type="text"
              onChange={handleInput}
              value={song.time}
              className="editform"
            ></input>
            <label htmlFor="mp3">Mp3:</label>
            <input
              id="mp3"
              type="text"
              onChange={handleInput}
              value={song.mp3}
              className="editform"
            ></input>
            <label htmlFor="is_favorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheck}
              value={song.is_favorite}
              className="editform"
            ></input>
            <button type="submit" className="editformbt">
              New
            </button>
          </form>
          <div className="songs_photo">
            <img
              src={song.photo ? song.photo : null}
              alt={song.photo}
              style={{ width: "350px", height: "320px" }}
              className="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
