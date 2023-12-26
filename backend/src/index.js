const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import the cors middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: '30mb' }));
app.use(express.json());
// Use cors middleware to enable CORS
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello Restful API");
});

routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`);
});