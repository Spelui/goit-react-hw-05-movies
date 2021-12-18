import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/api";
import HomeMovieItem from "../HomeMovieItem/HomeMovieItem";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  const getMovie = async () => {
    try {
      const movies = await getTrendingMovies();
      setMoviesArray([...movies.results]);
    } catch (error) {
      console.log(error.messege);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className={s.home}>
      <div className="container">
        <ul className={s.home__list}>
          {moviesArray.map(({ id, title, poster_path, release_date }) => (
            <HomeMovieItem
              key={id}
              id={id}
              title={title}
              poster={poster_path}
              data={release_date}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
