const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: password,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try{

    const user = await Users.findOne({ where: { username: username, password: password } });

    if (!user) res.json({ error: "Неверный логин или пароль" });
    //if (!password) res.json({ error: "User Doesn't Exist" });

    //bcrypt.compare().then(async (match) => {
      //if (!match) res.json({ error: "Wrong Username And Password Combination" });

      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );
      if(accessToken){
        res.json(accessToken);
      }else{
        res.send("error")
      }
      
    //});

  }catch (err) {
    console.log(err)
  }

});

module.exports = router;