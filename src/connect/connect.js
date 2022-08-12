const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectMongo = async (...opts) => {
    const [uname, password, ip, port, ...etc] = opts;
    const config = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    const mongoUrl = `mongodb://${uname}:${password}@${ip}:${port}/?authSource=admin`;
    mongoose.connect(mongoUrl, config);
};

mongoose.connection.on("connected", function () {
    console.log(`[ Mongoose default connection connected to db ]`);
});

mongoose.connection.on("error", function (err) {
    if (err)
        return console.log(
            `[ Mongoose default connection err ${err.message} ]`
        );
});

mongoose.connection.on("disconnected", function () {
    console.log(`[ Mongoose default connectios disconnected ]`);
});

mongoose.connection.on("open", function () {
    console.log(`[ Mongoose default connection is open ]`);
});

process.on("SIGINT", () => {
    const exit = mongoose.connection.close();
    console.log(
        `[ MongoDB default connectios exited | Process ${process.pid} has been interrupted ]`
    );
    exit && process.exit(0);
});

module.exports = connectMongo;
