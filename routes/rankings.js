const express = require("express");
const router = express.Router(); 
const rankingsModel = require("../models/rankingsModel");

router.get("/", async (req, res) => {
    const rankingsData = await rankingsModel.getAll();

    res.render("template", {
        locals: {
            title: "Rankings",
            data: rankingsData
        },
        partials: {
            partial: "partial-rankings"
        }
    })
})

module.exports = router;