const mongoose = require("mongoose");
const express = require("express");
const Place = require("./models/places");
const { postValidation } = require("./utils/postValidation");
const app = express();
require("dotenv").config();
const router = express.Router();
const user = express.Router();
const User = require("./models/user.js");
var jwt = require("jsonwebtoken");

router.use(express.json());
user.use(express.json())

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Error Connecting!", err));

  const jwtVerify = (req, res, next) => {
    try {
      let { authorization } = req.headers;
      let result = jwt.verify(authorization, process.env.JWT_PASS);
      console.log(result.username);
      next();
    } catch (err) {
      throw new ExpressError(
        403,
        "Not authorised to access this route without correct auth token"
      );
    }
  };

  const validatePost = (req, res, next) => {
    let { error } = postValidation.validate(req.body);
    if (error) {
      res.status(404).send(error);
    } else {
      next();
    }
  };
router.get("/", async (req, res) => {
  await Place.find().then((data) => {
    returnData = data;
  });
  res.send(returnData);
});

user.get("/", async (req, res) => {
  await Place.find().then((data) => {
    returnData = data;
  });
  res.send(returnData);
});

user.post("/", async(req, res)=>{
  let newData = new User(req.body)
  await newData.save()
  let token = jwt.sign({ username: req.body.userName }, process.env.JWT_PASS);
  res.send(token);
})

user.post(
  "/login",async (req, res) => {
    let { username, password } = req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    let result = await User.find({ username: username });
    if (result.length == 0) {
      throw new Error("User not found!");
    } else {
      let savedPassword = result[0].password;
      if (savedPassword != password) {
        res.status(401)
      } else {
        let token = jwt.sign(
          { username: req.body.username },
          process.env.JWT_PASS
        );
        res.send(token)
      }
    }
  }
);

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  await Place.findById(id).then((data) => {
    returnData = data;
  });
  res.send(returnData);
});

router.post("/",jwtVerify, validatePost, async (req, res) => {
  
  let insertData = new Place(req.body);
  insertData
    .save()
    .then(() => res.send(`Added Data`))
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedUser = await Place.findByIdAndUpdate(id,newData);
    if (updatedUser) {
      res.send(`Updated`);
    } else {
      res.status(404).send("not found");
    }
  } catch (err) {
    console.error("Error updating data", err);
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try{
    const { id } = req.params;
    let del = await Place.findByIdAndDelete(id);
    res.send(`Deleted`);
  }
  catch{
      res.status(404).send("Could not Find user with the title");
  }
  }
);

module.exports = {router, user};
