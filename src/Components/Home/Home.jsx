import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MediaContext } from "../../MediaContext";
import MediaRow from "../MediaRow/MediaRow";

export default function Home(/*{loginUser}*/) {
  let { trendingMovies, trendingTv, trendingPeople } = useContext(MediaContext);
  let navigate = useNavigate();

  return (
    <div className="container text-center home">
      <div className="row my-5 py-3">
        <div className="col-md-4 d-flex align-items-center my-5 my-md-auto text-md-start">
          <div className="w-100">
            <div className="border w-25 m-auto ms-md-0 "></div>
            <h2 className="h2 mt-4">
              Trending Movies <br /> To Watch <br /> Online
            </h2>
            <p className="text-muted mb-4">trending movies to watch</p>
            <div className="border"></div>
          </div>
        </div>
        <MediaRow mediaType={trendingMovies.slice(0, 10)} />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-transparent blue-cl"
            onClick={() => navigate("/movies")}
          >
            View More{" "}
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row my-5 py-3">
        <div className="col-md-4 d-flex align-items-center my-5 my-md-auto text-md-start">
          <div className="w-100">
            <div className="border w-25 m-auto ms-md-0"></div>
            <h2 className="h2 mt-4">
              Trending Tv Shows
              <br /> To Watch <br /> Online
            </h2>
            <p className="text-muted mb-4">trending Tv Shows to watch</p>
            <div className="border"></div>
          </div>
        </div>
        <MediaRow mediaType={trendingTv.slice(0, 10)} />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-transparent blue-cl"
            onClick={() => navigate("/tv")}
          >
            View More{" "}
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row my-5 py-3">
        <div className="col-md-4 d-flex align-items-center my-5 my-md-auto text-md-start">
          <div className="w-100">
            <div className="border w-25 m-auto ms-md-0"></div>
            <h2 className="h2 mt-4">
              Trending People
              <br /> To Watch Their <br />
              Movies Online
            </h2>
            <p className="text-muted mb-4">
              trending actors and actresses to watch them
            </p>
            <div className="border"></div>
          </div>
        </div>
        <MediaRow mediaType={trendingPeople.slice(0, 10)} />

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-transparent blue-cl"
            onClick={() => navigate("/people")}
          >
            View More{" "}
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
