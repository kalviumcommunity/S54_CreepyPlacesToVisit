const mongoose = require("mongoose");
const Places = require("../models/places");

const data = [
  new Places({
    title: "Abandoned Asylum",
    image: "https://t4.ftcdn.net/jpg/05/62/81/65/240_F_562816532_9cpzxBULerlNQ0UeuHHfWnTAd64PBf1z.jpg",
    user: "sampleuser123",
    time: new Date("2023-05-15"),
  }),
  new Places({
    title: "Haunted Mansion",
    image: "https://d3f7q2msm2165u.cloudfront.net/aaa-content/user/files/2023/Blog/Sonia/Screen%20Shot%202023-10-23%20at%201.36.30%20PM-min.png",
    user: "sampleuser124",
    time: new Date("2023-07-22"),
  }),
  new Places({
    title: "Island of the Dolls",
    image: "https://nypost.com/wp-content/uploads/sites/2/2021/10/island-of-the-dolls-main.jpg?quality=75&strip=all",
    user: "sampleuser125",
    time: new Date("2023-09-10"),
  }),
  new Places({
    title: "Aokigahara Forest",
    image: "https://www.verdict.co.uk/wp-content/uploads/2018/01/shutterstock_722719306-scaled.jpg",
    user: "sampleuser126",
    time: new Date("2023-11-05"),
  }),
  new Places({
    title: "Poveglia Island",
    image: "https://staticimg.amarujala.com/assets/images/2019/08/20/750x506/poveglia-island-italy_1566312692.jpeg",
    user: "sampleuser127",
    time: new Date("2024-01-18"),
  }),
  new Places({
    title: "Chernobyl Exclusion Zone",
    image: "https://media.nbcchicago.com/2021/04/AP_21114459770757-3.jpg?quality=85&strip=all&fit=5464%2C3640",
    user: "sampleuser128",
    time: new Date("2024-03-09"),
  }),
  new Places({
    title: "Sedlec Ossuary",
    image: "https://sedlecossuary.com/wp-content/uploads/2022/09/Sedlec_Ossuary_chandelier.jpg",
    user: "sampleuser129",
    time: new Date("2024-05-27"),
  }),
  new Places({
    title: "Pripyat Ghost Town",
    image: "https://i.dailymail.co.uk/1s/2021/10/27/09/49690939-0-image-a-3_1635321719830.jpg",
    user: "sampleuser130",
    time: new Date("2024-08-14"),
  }),
  new Places({
    title: "Bodie Ghost Town",
    image: "https://images.squarespace-cdn.com/content/v1/5a5986b2cf81e095e172ce87/6844cd21-bb78-4515-af6a-b7a949425215/flyingdawnmarie-bodie-ghost-town-11.jpg",
    user: "sampleuser131",
    time: new Date("2024-10-02"),
  }),
  new Places({
    title: "The Catacombs of Paris",
    image: "https://i0.wp.com/bookme.tours/wp-content/uploads/2023/05/What-Is-Inside-The-Catacombs-of-Paris.jpg?fit=1506%2C1000&ssl=1",
    user: "sampleuser132",
    time: new Date("2024-12-11"),
  }),
];

// Places.insertMany(data)
//   .then((docs)=>{
//     console.log('====================================');
//     console.log("Data Pushed");
//     console.log('====================================');
//   })
//   .catch((err)=>{
//     console.log('====================================');
//     console.log(err);
//     console.log('====================================');
//   })
