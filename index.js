const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = 5000;

// RENAME FILE JSON
const formJSON = require("./example.json");

app.use("/email", route);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
require("dotenv").config();

// GET DATA FROM JSON, DEPEND ON YOUR JSON FILE
var email = [];
var nama = [];
var result = [];
for (let i = 0; i < formJSON.length; i++) { 
    email.push(formJSON[i].email);
    nama.push(formJSON[i].name);
    result.push(formJSON[i].result);
}

// CHECK DATA FOR VALIDATION PURPOSE
console.log(data);
console.log(nama);
console.log(result);
console.log(
  "email: " +
    data.length +
    " nama: " +
    nama.length +
    " result: " +
    result.length
);

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

route.post("/text-mail", async (req, res) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < data.length; i++) {
    transporter.sendMail(
      {
        // DEPEND ON YOUR EMAIL
        from: "example",
        to: data[i], 
        subject: "example",
        text: "example",
        html: `
          Hello! ${nama[i]}, Your result is ${result[i]}
        `,
      },
      (error, info) => {
        if (error) {
          return console.log(error);
        }
        res
          .status(200)
          .send({ message: "Mail send", message_id: info.messageId });
      }
    );
    await sleep(5000);
  }
});
