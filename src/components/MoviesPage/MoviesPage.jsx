import { useState } from "react";
import { getSearchMovie } from "../../services/api";
import HomeMovieItem from "../HomeMovieItem/HomeMovieItem";
import s from "../HomePage/HomePage.module.scss";
import st from "./MoviePage.module.scss";

const MoviesPage = () => {
  const [input, setInput] = useState("");
  const [movieToSearch, setMovieToSearch] = useState([]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    console.log(e);
    searchMovieByTitle(input);
  };

  const onChangeSearch = (e) => {
    setInput(e.target.value);
  };

  const searchMovieByTitle = async (movieName) => {
    try {
      const moviesFind = await getSearchMovie(movieName);
      setMovieToSearch([...moviesFind.results]);
      return moviesFind;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container">
        <div>
          <form className={st.form} onSubmit={onSubmitSearch}>
            <input
              className={st.search}
              onChange={onChangeSearch}
              type="text"
              placeholder="Search"
              value={input}
            />
            <button className={st.btn} type="submit">
              Search
            </button>
          </form>
        </div>
        <ul className={s.home__list}>
          {movieToSearch.map(({ id, title, poster_path }) => (
            <HomeMovieItem id={id} title={title} poster={poster_path} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MoviesPage;
