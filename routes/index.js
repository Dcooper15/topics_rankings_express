const express = require("express");
const router = express.Router();

const rankingsModel = require("../models/rankingsModel");

const renderPage = async res => {
    const rankingsData = await rankingsModel.getAll();
    const statusData = await rankingsModel.getAllStatuses();
    return res.render("template", {
        locals: {
            title: "Topics",
            data: rankingsData,
            statusData: statusData
        },
        partials: {
            partial: "partial-index"
        }
    });
}
 


router.get("/", async (req, res, next) => {
    renderPage(res);
});



router.post("/", async (req, res) => {
    console.log(req.body);
    for (let key in req.body) {
        await rankingsModel.updateStatus(req.body[key], key);
       

    }
    renderPage(res);
});


module.exports = router;
