import React, { useState, useEffect } from "react";

const Home = (props: HomeProps) => {
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    fetch("/api/chirps")
      .then((response) => response.json())
      .then((chirps) => setChirps(chirps))
      .catch((err) => console.log(err));
  }, []);

  return chirps.map(chirp => (
      <>
      <h1>{chirp.name}</h1>
      <p>{chirp.message}</p>
      </>
  ))
};

interface HomeProps { }

export default Home;
