const mongoose = require("mongoose");
const express = require("express");
const Place = require("./models/places");
const { postValidation } = require("./utils/postValidation");
const app = express();
require("dotenv").config();
const router = express.Router();

router.use(express.json());

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Error Connecting!", err));

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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  await Place.findById(id).then((data) => {
    returnData = data;
  });
  res.send(returnData);
});


router.post("/",validatePost, async (req, res) => {
  
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

module.exports = router;
