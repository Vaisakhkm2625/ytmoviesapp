import React, { useState } from "react";

import { SearchBar, VideoList, VideoDetail } from "./components";


 baseURL='https://www.googleapis.com/youtube/v3';


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
           
    const { data: { items: videos } } = data;
          setVideos(videos);
          setSelectedVideo(videos[0]);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };


  return (
        <div>
          <div>
            <SearchBar onSubmit={handleSubmit} />
          </div>
          <div>
            <VideoDetail video={selectedVideo} />
          </div>
          <div>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        // TODO - add a new API key.
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });
      // 
       //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
