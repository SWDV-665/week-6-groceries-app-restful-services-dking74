"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var v1_1 = __importDefault(require("./v1"));
require("./mongoose.connector");
var exceptions_1 = require("./exceptions");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/api/v1', v1_1.default);
app.use('*', function (req, res) {
    console.log('The route does not exist!');
    res.status(404).send({ status: 404, message: 'The route does not exist!' });
});
app.use(function (err, req, res, next) {
    if (err instanceof exceptions_1.BaseErrorResponse) {
        res.status(err.statusCode).json({ status: err.statusCode, message: err.errorMessage });
    }
    console.debug('An expected error occurred. Original Error: ' + err.toString());
    res.status(500).send(err.toString());
});
exports.default = app;
