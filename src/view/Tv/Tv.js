import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


const RECOMENDATION_API =
  "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

/*const SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key="+YOUTUBE_API_KEY+"&q="*/
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query= ";

function Tv() {
   return (

	 <h1>hellohi</h1>
  );
}

export default Tv;
