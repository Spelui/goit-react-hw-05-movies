import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import s from "./Cast.module.scss";
import notFound from "../../images/image-not-found.jpg";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getchoiceMovie = async () => {
      try {
        const actors = await getMovieCast(params.id);
        setCast(actors.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getchoiceMovie();
  }, [params.id]);

  return (
    <ul className={s.cast}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.cast__item}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : notFound
            }
            alt={name}
            className={s.cast__poster}
          />
          <div>
            <p className={s.cast__name}>{name}</p>
            <p className={s.cast__character}>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
