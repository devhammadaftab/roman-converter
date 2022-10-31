const router = require("express").Router();
const { convert } = require("../controllers");

router.get("/converttoroman", (req, res) => {
    let { numerals } = req.query;
    let data = convert(numerals);
    res.send(
        `
        <style>
            div {
                display: flex;
                width: 100%;
                height: 100vh;
                justify-content: center;
            }
        </style>
        <div>
            <h1>${numerals} = ${data}</h1>
        </div>`
    )
});

module.exports = router;