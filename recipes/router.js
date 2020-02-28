const Recipes = require("./model.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  Recipes.all()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(({ name, message, stack, code }) => {
      console.log({ name, message, stack, code });

      res.status(500).json({ name, message, stack, code });
    });
});

module.exports = router;
