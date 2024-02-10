import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Summary = () => {
  const { id } = useParams();
  const parseData = useSelector((state) => state.summary.parseData);
 
  const showDetails = parseData.find((show) => show?.show?.id.toString() === id);

  if (!showDetails || !showDetails.show || parseData.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return (
    <div className='flex items-center justify-center h-screen rounded-md md:w-[60%] md:mx-auto'>
      <div className='flex flex-col justify-center items-center m-auto shadow-md p-4'>
        {showDetails.show.image && showDetails.show.image.original && (
          <img
            src={showDetails.show.image.original}
            alt=""
            className="w-[30vw] h-[30vh] object-contain "
          />
        )}
        <h1 className='font-bold'>{showDetails.show.name}</h1>
        <p className='bg-slate-800 text-white p-3 rounded-sm md:w-[100%]'>{showDetails.show.summary}</p>
        <Link to={`/bookingform/${showDetails.show.id}`} >
        <button className='bg-orange-500 text-white py-1 px-3 rounded-md my-3'>Book Tickets</button>
        </Link>
      </div>

    </div>
  );
};

export default Summary;