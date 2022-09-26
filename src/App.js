import React from "react";
import "./App.css";
import Row from "./Row";
import Footer from "./Footer";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


// Get-ExecutionPolicy -List
// Set-ExecutionPolicy Unrestricted
// Set-ExecutionPolicy Unrestricted -Force
// https://netflix-clone-9cf15.firebaseapp.com/

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> */}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Footer/>
      {/* <a href="https://sintayehu24.com"> ente@gmail.com</a> */}
    </div>
  );
}

export default App;
