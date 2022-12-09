const dbConnect = require("./config/mongo");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3001;



dbConnect().then((res) => {
    app.listen(process.env.PORT, () => {
        console.log("***Successfully connected***");
        console.log(`http://localhost:${PORT}`);
    });
  },
  (error) => {
    console.log("***Connection error***");
  }
);

