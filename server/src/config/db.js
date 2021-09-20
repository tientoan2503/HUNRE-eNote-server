/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require("mongoose");
const USER = "D2T-team"
const PASSWORD = "Cpx88rg7kfHOO5qn"

async function connect() {
  try {
    await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.pon4h.mongodb.net/HUNRE-eNote?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { connect }