import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookingForm = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    number: '',
  });

  const { id } = useParams();
  const parseData = useSelector((state) => state.summary.parseData);
  const showDetails = parseData.find((show) => show?.show?.id.toString() === id);

  if (!showDetails) {
    return (
      <div>
        <h1>Movie details not found</h1>
      </div>
    );
  }

  const showKey = `show_${showDetails.show.id}`;

  const bookTickets = (e) => {
    e.preventDefault();

    localStorage.setItem(`${showKey}_name`, input.username);
    localStorage.setItem(`${showKey}_email`, input.email);
    localStorage.setItem(`${showKey}_number`, input.number);
  
    localStorage.setItem(`${showKey}_movieName`, showDetails.show.name);
    localStorage.setItem(`${showKey}_showTiming`, showDetails.show.schedule.time);
  
    alert("Your ticket has been booked");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedNumber = localStorage.getItem('number');

    setInput({
      username: storedUsername || '',
      email: storedEmail || '',
      number: storedNumber || '',
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="bookingform flex flex-col gap-3 justify-center items-center h-screen md:w-[50%] md:mx-auto">
      <div className="main-container flex justify-center items-center gap-3 shadow-md w-[90%] p-2 rounded-md">
        <div className="image w-[18vw] md:w-[8vw] h-[16vh] md:h-[20vh] border rounded-lg">
          {showDetails.show.image && showDetails.show.image.original && (
            <img
              src={showDetails.show.image.original}
              alt=""
              className="w-full h-full object-fill"
            />
          )}
        </div>
        <div className="movie-details">
          <h1>{showDetails.show.name}</h1>
          <p>{showDetails.show.language}</p>
          <span>{showDetails.show.schedule.time}</span>
          <p>{showDetails.show.schedule.days}</p>
        </div>
      </div>

      <div className="user-details w-[90%] h-[40vh] shadow-md p-4 rounded-md">
        <form action="">
          <div className="inputbox my-5 w-full">
            <label htmlFor="username" className="w-[25vw] md:w-[10vw] inline-block">
              Name:
            </label>
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={handleInputChange}
              className="border w-[70%]"
            />
          </div>
          <div className="inputbox my-5">
            <label htmlFor="email" className="w-[25vw] md:w-[10vw] inline-block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              className="border w-[70%]"
            />
          </div>
          <div className="inputbox my-5">
            <label htmlFor="number" className="w-[25vw] md:w-[10vw] inline-block">
              Number:
            </label>
            <input
              type="number"
              name="number"
              value={input.number}
              onChange={handleInputChange}
              className="border w-[70%]"
            />
          </div>
          <button
            className="bg-red-500 text-white py-1 px-2 rounded-md my-3 w-[50%] block mx-auto"
            onClick={bookTickets}
          >
            Confirm Tickets
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
