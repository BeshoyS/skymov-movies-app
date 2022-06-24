import React from "react";
import { useNavigate } from "react-router-dom";

export default function MediaRow({ mediaType }) {
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();
  function clickImg(mediaType,id) {
    navigate(`/${mediaType}/${id}`)
  }

  return (
    <>
      {mediaType.map((media, index) => {
        return (
          <div key={index} className="col-md-4 col-lg-2 my-5 my-md-3 text-center">
            <div className="movie">
              <img
                onClick={()=> clickImg(media.media_type,media.id)}
                className="w-100"
                src={imgPrefix + (media.poster_path || media.profile_path)}
                alt={media.title || media.name}
                srcSet={""}
              />
              <h3 className="h6 mt-3">{media.title || media.name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
