const express = require("express");
const router = express.Router(); 
const languagesRankingsModel = require("../models/languagesRankingsModel");

router.get("/", async (req, res) => {
    const languagesRankingsData = await languagesRankingsModel.getAll();

    res.render("template", {
        locals: {
            title: "Languages and Rankings",
            data: languagesRankingsData
        },
        partials: {
            partial: "partial-languagesRankings"
        }
    });
});

router.post("/", async (req, res) => {
    console.log(req.body);
    res.status(200).send("OK").end();
});

module.exports = router;