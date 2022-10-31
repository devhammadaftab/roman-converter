const router = require("express").Router();
const { convert } = require("../controllers");

router.get("/converttoroman", (req, res) => {
    let { numerals } = req.query;
    let data = convert(numerals);
    res.status(200).json({
        data: data
    })
});

module.exports = router;