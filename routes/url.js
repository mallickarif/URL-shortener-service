const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const randonId = require("random-id");
const Url = require("../models/url");


router.post("/shorten", async (req, res) => {
  const { url } = req.body;

 
  if (!validUrl.isUri(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    let existingUrl = await Url.findOne({ original_url: url });

    if (existingUrl) {
      return res.json({ short_code: existingUrl.short_code });
    } else {
      const short_code = randonId.generate();
      const newUrl = new Url({
        original_url: url,
        short_code: short_code,
      });

      await newUrl.save();
      return res.json({ short_code: short_code });
    }
  } 
  catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});


router.get("/:short_code", async (req, res) => {
  try {
    const url = await Url.findOne({ short_code: req.params.short_code });

    if (url) {
      return res.redirect(url.original_url);
    } else {
      return res.status(404).json("No URL found");
    }
  } 
  catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
