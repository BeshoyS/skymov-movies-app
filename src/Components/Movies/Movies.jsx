import React, { useContext } from "react";
import { MediaContext } from "../../MediaContext";
import MediaRow from "../MediaRow/MediaRow";

export default function Movies() {
  let { trendingMovies } = useContext(MediaContext);

  return (
    <div className="container home">
      <div className="row my-3">
        <MediaRow mediaType={trendingMovies} />
      </div>
    </div>
  );
}
