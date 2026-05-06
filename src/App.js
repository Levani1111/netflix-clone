import React, { useState } from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";

const sections = {
  home: {
    label: "Home",
    rows: [
      {
        title: "NETFLIX ORIGINALS",
        fetchUrl: requests.fetchStreamingOriginals,
        isLargeRow: true,
      },
      { title: "Trending Now", fetchUrl: requests.fetchTrending },
      { title: "Top Rated", fetchUrl: requests.fetchTopRated },
      { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
      { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
      { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
      { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
      { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
    ],
  },
  tv: {
    label: "TV Shows",
    rows: [
      {
        title: "Netflix TV Originals",
        fetchUrl: requests.fetchStreamingOriginals,
        isLargeRow: true,
      },
      { title: "Popular TV Shows", fetchUrl: requests.fetchPopularTV },
      { title: "Top Rated TV", fetchUrl: requests.fetchTopRatedTV },
      { title: "TV Dramas", fetchUrl: requests.fetchTVDrama },
      { title: "TV Comedies", fetchUrl: requests.fetchTVComedy },
    ],
  },
  movies: {
    label: "Movies",
    rows: [
      {
        title: "Popular Movies",
        fetchUrl: requests.fetchPopularMovies,
        isLargeRow: true,
      },
      { title: "Top Rated Movies", fetchUrl: requests.fetchTopRated },
      { title: "Upcoming Movies", fetchUrl: requests.fetchUpcomingMovies },
      { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
      { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
      { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
      { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    ],
  },
  popular: {
    label: "New & Popular",
    rows: [
      {
        title: "Trending This Week",
        fetchUrl: requests.fetchTrending,
        isLargeRow: true,
      },
      { title: "Popular Movies", fetchUrl: requests.fetchPopularMovies },
      { title: "Popular TV Shows", fetchUrl: requests.fetchPopularTV },
      { title: "Upcoming Movies", fetchUrl: requests.fetchUpcomingMovies },
      { title: "Top Rated", fetchUrl: requests.fetchTopRated },
    ],
  },
  list: {
    label: "My List",
    rows: [],
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const currentSection = sections[activeSection];

  return (
    <div className="app">
      <Nav
        activeSection={activeSection}
        sections={sections}
        onSectionChange={setActiveSection}
      />
      <Banner />
      <main className="app__rows">
        {currentSection.rows.length > 0 ? (
          currentSection.rows.map((row) => (
            <Row
              key={`${activeSection}-${row.title}`}
              title={row.title}
              fetchUrl={row.fetchUrl}
              isLargeRow={row.isLargeRow}
            />
          ))
        ) : (
          <section className="app__empty-list">
            <h2>My List</h2>
            <p>
              Titles you add will appear here. Pick a movie from the rows and
              play a trailer to explore the catalog.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
