"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorResponse = exports.NotFoundErrorResponse = exports.BadRequestErrorResponse = exports.BaseErrorResponse = void 0;
var BaseErrorResponse_1 = require("./BaseErrorResponse");
Object.defineProperty(exports, "BaseErrorResponse", { enumerable: true, get: function () { return __importDefault(BaseErrorResponse_1).default; } });
var BadRequestErrorResponse_1 = require("./BadRequestErrorResponse");
Object.defineProperty(exports, "BadRequestErrorResponse", { enumerable: true, get: function () { return __importDefault(BadRequestErrorResponse_1).default; } });
var NotFoundErrorResponse_1 = require("./NotFoundErrorResponse");
Object.defineProperty(exports, "NotFoundErrorResponse", { enumerable: true, get: function () { return __importDefault(NotFoundErrorResponse_1).default; } });
var ServerErrorResponse_1 = require("./ServerErrorResponse");
Object.defineProperty(exports, "ServerErrorResponse", { enumerable: true, get: function () { return __importDefault(ServerErrorResponse_1).default; } });
