const userModel = require("../models/user.models");
const { updateMovieRating } = require("./movie.controller");

const registerUser = async ({ name, email, password }) => {
  const foundUser = await userModel.findOne({ email: email });
  //Checking User Already Exist Or Not
  if (foundUser) {
    throw new Error("Already Registered");
  }

  //Creating New User
  const newUser = await userModel.create({ name, email, password });
  return newUser;
};

const loginUser = async ({ email, password }) => {
  //Checking User Exist Or Not
  const foundUser = await userModel.findOne({ email: email });
  if (!foundUser) {
    throw new Error("User Not Found");
  }

  if (foundUser.password != password) {
    throw new Error("Wrong Password");
  }

  return foundUser;
};

const addRating = async ({ movieId, ratings }, userId) => {
  //Checking User Exist Or Not
  const foundUser = await userModel.findOne({ _id: userId });
  if (!foundUser) {
    throw new Error("User Not Found");
  }

  const ratedMovies = foundUser.ratedMovies || [];
  let foundIndex;
  ratedMovies.forEach((ele, idx) => {
    if (ele.movieID == movieId) {
      foundIndex = idx;
      return;
    }
  });

  if (foundIndex) {
    throw new Error("Already Rated Movie");
  }

  ratedMovies.push({ movieId, ratings });
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { ratedMovies }
  );
  await updateMovieRating(true, movieId, ratings);
  return updatedUser;
};

const deleteRating = async ({ movieId }, userId) => {
  //Checking User Exist Or Not
  const foundUser = await userModel.findOne({ _id: userId });
  if (!foundUser) {
    throw new Error("User Not Found");
  }

  const ratedMovies = foundUser.ratedMovies || [];
  let foundIndex;

  for (let i = 0; i < ratedMovies.length; i++) {
    if (ratedMovies[i].movieId == movieId) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex == undefined) {
    throw new Error("Movie Not Found");
  }

  await updateMovieRating(false, movieId, ratedMovies[foundIndex].ratings);
  ratedMovies.splice(foundIndex, 1);
  // console.log(ratedMovies)
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { ratedMovies }
  );
  return updatedUser;
};

module.exports = { registerUser, loginUser, addRating, deleteRating };
