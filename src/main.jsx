import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ShowsList from './components/ShowsList.jsx';
import Summary from './components/Summary.jsx';
import App from './App.jsx';
import { Provider } from 'react-redux'
import {store} from './app/store'
import BookingForm from './components/BookingForm.jsx';

const root = (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/showslist" element={<ShowsList />} />
          <Route path="/summary/:id" element={<Summary />} />        
          <Route path="/bookingform/:id" element={<BookingForm />} />        
       </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(root);
