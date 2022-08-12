const express = require("express");

const app = express();
const redis = require("redis");
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

app.use(express.json());
app.use("/api/v1/posts", postRouter);

connectMongo(MONGO_UNAME, MONGO_PWD, MONGO_IP, MONGO_PORT);

app.listen(port, () => {
    console.log("Server running on port ", port);
});
