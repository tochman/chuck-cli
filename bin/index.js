#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
  .usage("Usage: chuck -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name (used to greet you)",
    type: "string",
    demandOption: true
  })
  .argv;

console.log(`Here's a random Chuck Norris joke for you ${options.name}:`);

const url = "http://api.icndb.com/jokes/random";

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    console.log(res.data.value.joke);
  });
