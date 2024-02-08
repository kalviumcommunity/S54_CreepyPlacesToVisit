const mongoose = require("mongoose");
const express = require ('express')
const Places = require("../models/places");
require("dotenv").config({path:"../.env"})
const app = express();

async function main() {
  await mongoose.connect(
    process.env.MONGO_URI
  );
}

main()
  .then(() => {
   
    console.log("Connection created Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const data = [
  new Places({
    title: "Abandoned Asylum",
    location: "Outskirts of Towns",
    image: "https://t4.ftcdn.net/jpg/05/62/81/65/240_F_562816532_9cpzxBULerlNQ0UeuHHfWnTAd64PBf1z.jpg",
    description: "An eerie structure on the outskirts of towns, this abandoned asylum stands as a haunting reminder of past traumas. Its crumbling walls echo the stories of those who once sought refuge within.",
    user: "sampleuser123",
    time: new Date("2023-05-15"),
  }),
  new Places({
    title: "Haunted Mansion",
    location: "America",
    image: "https://d3f7q2msm2165u.cloudfront.net/aaa-content/user/files/2023/Blog/Sonia/Screen%20Shot%202023-10-23%20at%201.36.30%20PM-min.png",
    description: "A decrepit mansion shrouded in mystery, its dark corridors and shadowy rooms hold secrets of a past long forgotten. Ghostly apparitions and strange phenomena are said to haunt its halls.",
    image: "https://d3f7q2msm2165u.cloudfront.net/aaa-content/user/files/2023/Blog/Sonia/Screen%20Shot%202023-10-23%20at%201.36.30%20PM-min.png",
    user: "sampleuser124",
    time: new Date("2023-07-22"),
  }),
  new Places({
    title: "Island of the Dolls",
    location: "Mexico",
    image: "https://nypost.com/wp-content/uploads/sites/2/2021/10/island-of-the-dolls-main.jpg?quality=75&strip=all",
    description: "Located in the heart of Mexico, the Island of the Dolls is adorned with hundreds of dolls hanging from trees. Legend has it that the island is haunted by the spirit of a young girl who drowned nearby.",
    user: "sampleuser125",
    time: new Date("2023-09-10"),
  }),
  new Places({
    title: "Aokigahara Forest",
    location: "Japan",
    image: "https://www.verdict.co.uk/wp-content/uploads/2018/01/shutterstock_722719306-scaled.jpg",
    description: "Also known as the Suicide Forest, Aokigahara is a dense forest at the base of Mount Fuji in Japan. It has gained notoriety as a site for suicides, with many tragic stories associated with its eerie atmosphere.",
    user: "sampleuser126",
    time: new Date("2023-11-05"),
  }),
  new Places({
    title: "Poveglia Island",
    location: "Venice, Italy",
    image: "https://staticimg.amarujala.com/assets/images/2019/08/20/750x506/poveglia-island-italy_1566312692.jpeg",
    description: "Located off the coast of Venice, Italy, Poveglia Island has a dark history as a quarantine station and later as an asylum. It is rumored to be haunted by the tortured souls of its past inhabitants.",
    user: "sampleuser127",
    time: new Date("2024-01-18"),
  }),
  new Places({
    title: "Chernobyl Exclusion Zone",
    location: "Ukraine",
    image: "https://media.nbcchicago.com/2021/04/AP_21114459770757-3.jpg?quality=85&strip=all&fit=5464%2C3640",
    description: "The site of the infamous Chernobyl nuclear disaster, the Exclusion Zone is a desolate and eerie place frozen in time. Abandoned buildings, rusting machinery, and high radiation levels characterize this haunting landscape.",
    user: "sampleuser128",
    time: new Date("2024-03-09"),
  }),
  new Places({
    title: "Sedlec Ossuary",
    location: "Kutná Hora, Czech Republic",
    image: "https://sedlecossuary.com/wp-content/uploads/2022/09/Sedlec_Ossuary_chandelier.jpg",
    description: "Located beneath the Cemetery Church of All Saints in Kutná Hora, Czech Republic, the Sedlec Ossuary is a chapel adorned with human bones. Its macabre decorations include a chandelier made entirely of bones.",
    user: "sampleuser129",
    time: new Date("2024-05-27"),
  }),
  new Places({
    title: "Pripyat Ghost Town",
    location: "Pripyat, Ukraine",
    image: "https://i.dailymail.co.uk/1s/2021/10/27/09/49690939-0-image-a-3_1635321719830.jpg",
    description: "Once a bustling city near the Chernobyl nuclear power plant, Pripyat was evacuated and abandoned after the 1986 disaster. Today, it stands as a haunting reminder of the consequences of nuclear catastrophe.",
    user: "sampleuser130",
    time: new Date("2024-08-14"),
  }),
  new Places({
    title: "Bodie Ghost Town",
    location: "California, USA",
    image: "https://images.squarespace-cdn.com/content/v1/5a5986b2cf81e095e172ce87/6844cd21-bb78-4515-af6a-b7a949425215/flyingdawnmarie-bodie-ghost-town-11.jpg",
    description: "Bodie is a well-preserved ghost town in California, USA, frozen in time from the late 19th century gold rush era. Its abandoned buildings and eerie atmosphere attract visitors interested in its haunted history.",
    user: "sampleuser131",
    time: new Date("2024-10-02"),
  }),
  new Places({
    title: "The Catacombs of Paris",
    location: "Paris, France",
    image: "https://i0.wp.com/bookme.tours/wp-content/uploads/2023/05/What-Is-Inside-The-Catacombs-of-Paris.jpg?fit=1506%2C1000&ssl=1",
    description: "Beneath the streets of Paris lie the Catacombs, a vast network of tunnels lined with the bones of millions of people. This macabre underground ossuary has fascinated visitors for centuries.",
    user: "sampleuser132",
    time: new Date("2024-12-11"),
  }),
];

Places.insertMany(data)
  .then((docs)=>{
    console.log('====================================');
    console.log("Data Pushed");
    console.log('====================================');
  })
  .catch((err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  })
