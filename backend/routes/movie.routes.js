const { Router } = require("express");

const { getMovies } = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.get("/", async (req, res) => {
  try {
    const movies = await getMovies();
    res.send({
      data: movies,
    });
  } catch (error) {
    res.status(500).send({
      error: "Some error caught",
    });
  }
});

module.exports = movieRouter;
