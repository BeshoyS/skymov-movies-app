import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export let MediaContext = createContext([]);

export function MediaContextProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrendingMedia(typeData, callback) {
    let { data } =
      await Axios.get(`https://api.themoviedb.org/3/trending/${typeData}/week?api_key=f33f9dbd4ca53942082744098c230cfe
          `);
    callback(data.results);
  }

  useEffect(() => {
    getTrendingMedia("movie", setTrendingMovies);
    getTrendingMedia("tv", setTrendingTv);
    getTrendingMedia("person", setTrendingPeople);
  }, []);

  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingTv, trendingPeople }}
    >
      {children}
    </MediaContext.Provider>
  );
}
