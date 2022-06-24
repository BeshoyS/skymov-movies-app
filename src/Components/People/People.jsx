import React, { useContext } from "react";
import { MediaContext } from "../../MediaContext";
import MediaRow from "../MediaRow/MediaRow";

export default function People() {
    let { trendingPeople } = useContext(MediaContext);

    return (
      <div className="container home">
        <div className="row my-3">
          <MediaRow mediaType={trendingPeople} />
        </div>
      </div>
    );
}
