const { Router } = require("express");

const movieRouter = Router();

movieRouter.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      error: "Some error caught",
    });
  }
});

module.exports = movieRouter;
