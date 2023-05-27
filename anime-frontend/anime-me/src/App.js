import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';


function App() {

  const [animes, setAnimes] = useState();


  const getAnimes = async () => {
    try {
      const response = await api.get("/api/v1/animes");
      console.log(response.data);
      setAnimes(response.data);

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getAnimes();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home animes={animes} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:animeId" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
