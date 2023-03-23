import React, { useEffect, useState } from "react";
import "./movieCard.css";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setLogin, setMovies } from "../../redux/actions/index.action";
import { deleteRating, getMovies, movieRating } from "../../utils/api";
import { checkRated, showAlert } from "../../utils/commonFun";

const MovieCard = ({ data, showRatingIcon }) => {
  const { _id, img, title, releaseYear, averageRating, totalCounting } = data;
  const [showRating, setShowRating] = useState(true);
  const { isLogin, auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowRating(!showRatingIcon);
  }, [showRatingIcon]);

  const ratingChanged = (newRating) => {
    if (!auth.isLogin) {
      setLogin(true, dispatch);
      return;
    }

    movieRating({ movieId: _id, ratings: newRating }, auth.details["_id"]).then(
      (res) => {
        setAuth(
          {
            isLogin: true,
            details: {
              ...auth.details,
              ratedMovies: [...res.data.ratedMovies],
            },
          },
          dispatch
        );
        getMovies().then((res) => {
          setMovies(res.data, dispatch);
          setShowRating(false);
        });
        showAlert("Rating Given");
      }
    );
  };

  const removeRating = () => {
    deleteRating({ movieId: _id }, auth.details["_id"]).then((res) => {
      setAuth(
        {
          isLogin: true,
          details: {
            ...auth.details,
            ratedMovies: [...res.data.ratedMovies],
          },
        },
        dispatch
      );
      getMovies().then((res) => {
        setMovies(res.data, dispatch);
        setShowRating(true);
      });
      showAlert("Rating Removed");
    });
  };
  return (
    <div className="movieCard">
      <img src={img} />
      <h2>{title}</h2>
      <div className="movieDetails">
        <p>Release Year</p>
        <p>{releaseYear}</p>
        <p>Average Rating</p>
        <p>
          {averageRating} <i className="fa-solid fa-star"></i>
        </p>
        <p>Total Rating</p>
        <p>
          {totalCounting} <i className="fa-solid fa-user"></i>
        </p>
      </div>
      {showRating ? (
        <ReactStars
          className="starGroup"
          count={5}
          onChange={ratingChanged}
          size={40}
          color2={"#ffd700"}
        />
      ) : (
        <button className="removeButton" onClick={removeRating}>
          Remove Rating
        </button>
      )}
    </div>
  );
};

export default MovieCard;
