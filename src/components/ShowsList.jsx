import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowsList = () => {
  const parseData = useSelector((state) => state.summary.parseData);

  return (
    <>
      <div className="show-conatiner flex flex-wrap justify-center items-center gap-2 mt-5">
        {parseData &&
          parseData.map((showDetails) => (
            <div className="shadow-lg text-center" key={showDetails.show.id}>
              {showDetails.show.image && showDetails.show.image.original && (
                <img
                  src={showDetails.show.image.original}
                  alt=""
                  className="w-[20vw] h-[24vh] object-contain "
                />
              )}
              {!showDetails.show.image && (
                <div className="w-[20vw] h-[24vh] bg-gray-100"></div>
              )}
              <h3>{showDetails.show.name}</h3>
              <h2>{showDetails.show.genres}</h2>
              <p>{showDetails.show.language}</p>
              <Link to={`/summary/${showDetails.show.id}`}>
                <button className="bg-red-600 p-2 text-white rounded-md my-2">
                  click to know more
                </button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShowsList;
