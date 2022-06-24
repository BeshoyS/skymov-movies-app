import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MediaDetails() {
  const [media, setMedia] = useState({});
  const { id } = useParams();
  const mediaType = window.location.hash.split('/')[1];
  const navigate = useNavigate();
  let imgPrefix = "https://image.tmdb.org/t/p";
  useEffect(() => {
    async function getMediaDetails() {
      let { data } =
      await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f33f9dbd4ca53942082744098c230cfe
      `);
      setMedia(data);
    }
    getMediaDetails();
  }, [id, mediaType]);

  return (
    <>
      <div
        className="vh-md-100 py-5 position-relative"
        style={
          !media.biography
            ? {
                backgroundImage: `linear-gradient( 180deg, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${imgPrefix}/original${media?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        <div className="container-lg mx-auto row py-5">
          <div className="col-md-4">
            <div className="img">
              <img
                className="w-100 rounded-3 shadow-lg"
                src={
                  imgPrefix +
                  "/w500" +
                  (media?.poster_path || media?.profile_path)
                }
                alt={media?.title || media?.name}
              />
            </div>
          </div>
          <div className="col-md-8 ps-0 ps-md-5">
            <div className="details py-5 py-md-0">
              <h1>{media?.title || media?.name}</h1>
              <div className="genres my-3 lh-lg">
                {media.genres?.map((genre) => {
                  return (
                    <span
                      key={genre.id}
                      className="me-3 p-2 border border-1 rounded-pill"
                    >
                      {genre.name}
                    </span>
                  );
                })}
                {media.number_of_seasons && (
                  <p className="me-3 p-2 my-2 d-inline-block">
                    {media?.number_of_seasons} Seasons
                  </p>
                )}
                {media.first_air_date && (
                  <p className="me-3 p-2 my-2 d-inline-block">
                    {media.first_air_date?.slice(0, 4)} -{" "}
                    {media.last_air_date.slice(0, 4)}
                  </p>
                )}
                {media.release_date && (
                  <p className="me-3 p-2 my-2 d-inline-block">
                    {media.release_date?.slice(0, 4)}
                  </p>
                )}
              </div>
              <div className="overview">
                <p className="mb-5">{media?.overview || media.biography?.slice(0,1200)}...</p>
              </div>
              <div className="btns">
                {media.imdb_id &&
                <a href={`https://www.imdb.com/${media.biography? 'name':'title'}/${media.imdb_id}`} className="btn me-3 btn-transparent border blue-cl" target='_blank' rel='noreferrer'>IMDB</a>}
                <a href={media.homepage} className="btn me-3 btn-transparent border blue-cl" target='_blank' rel='noreferrer'>Visit/Watch</a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0">
        <button className="btn btn-transparent text-white" onClick={()=> navigate(-1)}><i className="fa fa-arrow-left border rounded-3 p-3 mx-3" aria-hidden="true"></i></button>
      </div>
      </div>
      <div className="seasonsBrief my-4 container-lg">
        {media.seasons && <h3 className="mt-5">Seasons</h3>}
        {media.seasons?.filter(season=> season.name !== 'Specials').map((season)=>{return(
          <div key={season.id} className="my-5 shadow-lg w-100 row">
            <div className="img col-md-3 mx-auto">
              <img className="w-100" src={season.poster_path ? imgPrefix+'/w500'+season.poster_path:'https://via.placeholder.com/500x700.png?text=Unavailable'} alt="" />
            </div>
            <div className="col-md-9 seasonDetails py-3">
              <h4>{season.name} ({season.air_date?.slice(0,4)})</h4>
              <h6>{season.episode_count} Episodes</h6>
              <p>{season.overview}</p>
            </div>
          </div>
        )})}
      </div>
    </>
  );
}
