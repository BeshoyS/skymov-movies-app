import React, { useContext } from "react";
import { MediaContext } from "../../MediaContext";
import MediaRow from "../MediaRow/MediaRow";

export default function Tv() {
    let { trendingTv } = useContext(MediaContext);

    return (
      <div className="container home">
        <div className="row my-3">
          <MediaRow mediaType={trendingTv} />
        </div>
      </div>
    );
}
