const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IYOYOSC4Yv97SqFHv6IxESR7OljLS2fEfJJQSaB2WqNVH3NsmuKRYVg6UaznoTMv0gbPdrMfbzKHDJLRpRW110w007lzlGSpY"
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // 201 is OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
