const express = require("express");
const router = express.Router();

const USER = require("../schema/user");

router.get("/", (req, res) => res.send("remit. server is running | Router Middleware"));

router.post("/api/user", async (req, res) => {
  
  const { name, email, password, phone, accounts } = req.body;

  const found = await USER.findOne({ email });
  if(found) res.send("\n>> User already exists.");
  else {
    
    const user = new USER({ email, user: { password, name, phone, accounts } });

    const result = await user.save();
    if (result) res.send("\n>> Data have been saved successfully !");
    else res.send("\n>> Some error has been occurred while saving the data");
  }
});

router.post("/api/login", async (req, res) => {

  const { email, password } = req.body;
  console.log(email + " " + password);
  
  USER.findOne({ email })
    .then((found) => { res.send(found); })
    .catch((err) => res.send(err));
  
});

module.exports = router;