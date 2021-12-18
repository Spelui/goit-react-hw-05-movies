import { Link } from "react-router-dom";
import notFound from "../../images/image-not-found.jpg";
import s from "../HomePage/HomePage.module.scss";

const HomeMovieItem = ({ id, title, poster, data }) => {
  const IMG_URL = `https://image.tmdb.org/t/p/w200/${poster}`;
  return (
    <li id={id} className={s.home__item}>
      <Link to={`/movies/${id}`} className={s.home__link}>
        <img
          className={s.home__poster}
          src={poster ? IMG_URL : notFound}
          alt={title}
        />
        <div className={s.home__text}>
          <h2 className={s.home__title}>{title}</h2>
          <p className={s.home__data}>
            <b>Release date:</b> {data}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default HomeMovieItem;
