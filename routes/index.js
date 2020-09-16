const express = require("express");
const router = express.Router();

const rankingsModel = require("../models/rankingsModel");

router.get("/", async (req, res) => {
    const topicsData = await topicsModel.getAll();
    res.render("template", {
        locals: {
            title: "Topics",
            data: topicsData
        },
        partials: {
            partial: "partial-index"
        }
    })
})



router.get("/", async function (req, res, next) {
    renderPage(res);
});

router.post("/index", async (req, res) => {
    console.log(req.body);
    const dbResponse = rankingsModel.updateStatus(1, "HTML");
    console.log("my database response is:", dbResponse);
    res.status(200).send("OK").end();
});


module.exports = router;
