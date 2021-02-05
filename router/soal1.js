const express = require("express");
const router = express.Router();
const {query, db} = require("../database");
const {
  checkToken,
  createJWTToken,
} = require("../helper")
const path = "/users";

router.post("./register", async (req, res) => {
  let {username, email, password} = req.body;
  try{
    const insert = await query(
      `insert into users (id, username, email, password, role, status) values (${id}, '${username}', '${email}', '${password}', 2, 1)`
      );
      return res.status(200).send("Registered");
  } catch(err) {
    return res.status(500).send(err);
  };
});

router.post("./login", checkToken(), (req, res) => {
  const {username, password} = req.body
  let sql = `
    SELECT 
    id, 
    username, 
    email, 
    password, 
    role, 
    status
    FROM users WHERE username = '${username}' AND password = '${password}'
    `
    db.query(sql, (err, data) => {
      if(err) {
        return res.status(500).send(err)
      }
      if (data.length === 0) {
        return res.status(404).send({
          message: "User Not Found",
          status: "Not Found",
        })
        
        }else {
          const responsedata = {...data[0]}
          const token = createJWTToken(responsedata)
          responsedata.token = token
          return res.status(200).send(responsedata)
      }
    })
})

router.patch("./login", async (req, res) => {
  try{

  }catch(err) {

  }
})

module.exports = router;