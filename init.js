//data insertion in DB at once

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
} //connection with DB

main().then((res) => {
  console.log("connection to DB done.");
});

let allChats = [
  {
    from: "parth",
    to: "tanay",
    msg: "hey, let's play a game!",
    created_at: new Date(),
  },
  {
    from: "parth",
    to: "shivam",
    msg: "Reels bamate hai",
    created_at: new Date(),
  },
  {
    from: "parth",
    to: "harshit",
    msg: "Boat ka kya hua fir",
    created_at: new Date(),
  },

  {
    from: "mayank sir",
    to: "CSE 2026",
    msg: "debarred list for practicals...",
    created_at: new Date(),
  },

  {
    from: "pankaj sir",
    to: "CSE 2026",
    msg: "student have to submit assignment by tomorrow",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
