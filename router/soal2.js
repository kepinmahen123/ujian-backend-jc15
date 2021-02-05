const express = require("express");
const router = express.Router();
const {query} = ("../database")
const path = ("/users")

router.get("./movies", (req, res) => {
  let sql = `select * from movies`
  query(sql, (err, data) => {
    if(err, data) {
      return res.status(500).send(err)
    }
    return res.status(200).send(data)
  })
})

module.exports = router;