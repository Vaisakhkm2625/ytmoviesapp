import React, { useState } from "react";

import  SearchBar from "../../components/SearchBar/SearchBar"

import  VideoList from "../../components/VideoList/VideoList"

//import  VideoDetail  from "../../components/VideoDetail/VideoDetail"


const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL='https://www.googleapis.com/youtube/v3/';
const SEARCH_API=baseURL+"search?part=snippet&maxResults=5&key="+YOUTUBE_API_KEY+"&q="


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

    //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm
   
    const getMovies = (API) => {
        let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
           
    const { items: videos  } = data;
          setVideos(videos);
          setSelectedVideo(videos[0]);
      });
  };


  return (
        <div>
          <div>
            <SearchBar onSubmit={handleSubmit} />
          </div>
          <div>
          </div>
          <div>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
  );

    async function handleSubmit(searchTerm) {/*
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        // TODO - add a new API key.
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });*/
      // 
       //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm

    getMovies(SEARCH_API + searchTerm);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
