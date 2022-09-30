const express = require("express");
const router = express.Router();

const USER = require("../schema/user");

router.get("/", (req, res) => res.send("remit. server is running | Router Middleware"));

router.post("/api/user", async (req, res) => {
  
  const { name, email, password, phone, accounts } = req.body;

  const found = await USER.findOne({ email });
  if(found) res.send(false);
  else {
    
    const user = new USER({ email, user: { password, name, phone, accounts } });

    const result = await user.save();
    if (result) res.send(true);
    else res.send(false);
  }
});

router.post("/api/login", async (req, res) => {

  const { email, password } = req.body;

  USER.findOne({ email })
    .then((found) => {

      if (found) {
        if (password === found.user.password) res.send(found);
        else res.send(false);
      }
      else res.send(false);

    })
    .catch((err) => console.log(err));
  
});

module.exports = router;