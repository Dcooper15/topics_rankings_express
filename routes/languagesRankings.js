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
    })
})

module.exports = router;