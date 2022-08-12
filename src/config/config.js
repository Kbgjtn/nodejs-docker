module.exports = {
    MONGO_IP: String(process.env.MONGO_IP) || "mongo",
    MONGO_PORT: String(process.env.MONGO_PORT) || 27017,
    MONGO_UNAME: String(process.env.MONGO_UNAME),
    MONGO_PWD: String(process.env.MONGO_PWD),
    REDIS_URL: String(process.env.REDIS_URL) || "redis",
    REDIS_PORT: String(process.env.REDIS_PORT) || 6379,
};
