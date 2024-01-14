// declare a constant and name it express
// add the express library with (require)
const express = require("express");
// create app with the imported express library
const app = express();

// declare port
const port = process.env.PORT || 3000;

// redirect traffice to routes folder into index.js
app.use("/", require("./routes"));

// listen to port
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
