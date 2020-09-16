const express = require("express");
const router = express.Router();
const topicsModel = require("../models/topicsModel");

router.get("/", async (req, res) => {
    const topicsData = await topicsModel.getAll();

    res.render("template", {
        locals: {
            title: "Topics",
            data: topicsData
        },
        partials: {
            partial: "partial-topics"
        }
    })
})

module.exports = router;