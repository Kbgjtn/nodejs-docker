const express = require("express");

const app = express();
const redis = require("redis");
const cors = require("cors");
const RedisStore = require("connect-redis");
require("dotenv").config();

const {
    MONGO_UNAME,
    MONGO_PORT,
    MONGO_IP,
    MONGO_PWD,
    REDIS_URL,
    REDIS_PORT,
} = require("./src/config/config");

const RedisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
});

const connectMongo = require("./src/connect/connect");
const port = process.env.PORT || 8000;
const postRouter = require("./src/routes/post-route");

/* production config */
app.enable("trust proxy");
app.use(cors({}));

app.use(express.json());
app.use("/api/v1/posts", postRouter);

app.get("/api/v1", (req, res) => {
    console.log("yoo!");
    res.send("hi there!!!");
});

connectMongo(MONGO_UNAME, MONGO_PWD, MONGO_IP, MONGO_PORT);

app.listen(port, () => {
    console.log("Server running on port ", port);
});
