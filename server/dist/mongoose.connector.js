"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var USERNAME = process.env.MONGODB_USERNAME;
var PASSWORD = process.env.MONGODB_PASSWORD;
var DATABASE = process.env.MONGODB_DATABASE;
var DOMAIN = process.env.MONGODB_DOMAIN;
if (!(USERNAME && PASSWORD && DATABASE && DOMAIN)) {
    console.error('Mongoose parameters not set. Please setup environment for following variables:\n' +
        'MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE, and MONGODB_DOMAIN');
    process.exit();
}
var mongooseURL = "mongodb+srv://" + USERNAME + ":" + PASSWORD + "@" + DOMAIN + "/" + DATABASE + "?retryWrites=true&w=majority";
mongoose_1.default.connect(mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (error) {
    console.error('Unable to connect to mongoose database. Original Error: ' + error.toString());
    process.exit();
});
