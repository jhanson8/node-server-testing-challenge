const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ router: "cookbooks" });
});

module.exports = router;
