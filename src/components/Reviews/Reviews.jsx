import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/api";
import s from "./Reviews.module.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getReviewsMovie = async () => {
      try {
        const rew = await getMovieReviews(params.id);
        setReviews(rew);
      } catch (error) {
        console.log(error);
      }
    };
    getReviewsMovie();
  }, [params.id]);

  console.log(reviews);

  return (
    <ul className={s.reviews}>
      {reviews.results?.map(({ author, content, id }) => (
        <li key={id} className={s.reviews__item}>
          <p className={s.reviews__autor}>{author}</p>
          <p className={s.reviews__content}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
