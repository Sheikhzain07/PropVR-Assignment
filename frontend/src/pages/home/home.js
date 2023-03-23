import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/movieCard";
// import PosterCarousel from '../../components/PosterCarousel/PosterCarousel';
import { setMovies } from "../../redux/actions/index.action";
import { getMovies } from "../../utils/api";
import { checkRated } from "../../utils/commonFun";
import "./home.css";

const Home = () => {
  const { movies, auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.data, dispatch);
    });
  }, []);

  return (
    <div>
      {/* <div id='posterDiv'>
                <PosterCarousel/>
            </div> */}
      <h1 id="moviesHeading">Rate Movies</h1>
      <div id="displayMovies">
        {movies.map((ele) => {
          return (
            <MovieCard
              showRatingIcon={checkRated(auth.details?.ratedMovies, ele["_id"])}
              key={ele["_id"]}
              data={ele}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
