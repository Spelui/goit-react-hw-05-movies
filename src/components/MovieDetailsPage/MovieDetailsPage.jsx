import { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import { getMovieById } from "../../services/api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import s from "./MovieDetailsPage.module.scss";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const onClose = (e) => {
    // eslint-disable-next-line default-case
    switch (location.pathname) {
      case match.url:
        break;
      case `${match.url}/cast`:
        history.goBack();
        break;
      case `${match.url}/reviews`:
        history.goBack();
        break;
    }
  };

  useEffect(() => {
    const getchoiceMovie = async () => {
      try {
        const movie = await getMovieById(params.id);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getchoiceMovie();
  }, [params.id]);

  const { genres, poster_path, overview, original_title, vote_average } = movie;
  const IMG_URL = `https://image.tmdb.org/t/p/w200/${poster_path}`;
  const genresMovie = genres?.map(({ name }) => name).join(", ");

  return (
    <section>
      <div className="container">
        <button
          className={s.btn}
          type="button"
          onClick={() => history.goBack()}
        >
          Go Back
        </button>
        <div className={s.details__card}>
          <img src={IMG_URL} alt="" className={s.img} />
          <div className={s.text}>
            <h2 className={s.title}>{original_title}</h2>
            <p className={s.average}>{vote_average}</p>
            <p className={s.overview}>Overview</p>
            <p className={s.overview__text}>{overview}</p>
            <p className={s.genres}>Genres</p>
            <p className={s.genres__text}>{genresMovie}</p>
          </div>
        </div>
        <div className={s.link}>
          <NavLink
            to={`${match.url}/cast`}
            onClick={onClose}
            className={s.link__cast}
            activeClassName={s.active}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${match.url}/reviews`}
            onClick={onClose}
            className={s.link__reviews}
            activeClassName={s.active}
          >
            Reviews
          </NavLink>
        </div>

        <Switch>
          <Route path={`${match.path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${match.path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
