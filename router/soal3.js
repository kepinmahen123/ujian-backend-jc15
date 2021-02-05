const express = require("express");
const router = express.Router();
const {query, db} = require("../database");
const { createJWTToken, checkToken } = require("../helper/jwt");
const path = "/admin";


router.post("/add", async (req, res) => {
  `INSERT INTO movies (
    name, genre, release_date, release_month, release_year, duration_min, description, token) 
    VALUES (
      '${name}', '${genre}', ${release_date}, ${release_month}, ${release_year}, ${duraton_min}, '${description}', '${createJWTToken()}')`
      db.query(sql, (err, data) => {
        if(err) {
          return res.status(500).send(err)
        }
        return res.status(200).send(data)
      })
})

router.patch("/:login", (req, res) => {
  try{
  const id = req.params
  const response = await query(`SELECT status FROM movies`)
  if(response) {
    checkToken()
  }
  await query (`update movie set name = '${name}', '${genre}', ${release_date}, ${release_month}, ${release_year}, ${duraton_min}, '${description}'`)
  return res.status(200).send("status has been changed.")
    }catch(err) {
      return res.status(500).send(err)
  }
})



module.exports = {router}