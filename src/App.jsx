import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParseData } from './features/summary/summarySlice';
import ShowsList from './components/ShowsList';

function App() {
  const dispatch = useDispatch();
  const parseData = useSelector((state) => state.summary.parseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        dispatch(setParseData(data)); 
      } catch (error) {
        console.log(error);
      }
    };

    if (parseData.length === 0) {
      fetchData();
    }
  }, [dispatch, parseData.length]);

  return (
    <>
      <ShowsList />
    </>
  );
}

export default App;

