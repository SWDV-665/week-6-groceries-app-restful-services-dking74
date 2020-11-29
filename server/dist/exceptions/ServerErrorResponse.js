"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseErrorResponse_1 = __importDefault(require("./BaseErrorResponse"));
var ServerErrorResponse = /** @class */ (function (_super) {
    __extends(ServerErrorResponse, _super);
    function ServerErrorResponse(errorMessage) {
        return _super.call(this, 'An internal server occurred. Please consult administrator. ' +
            ("" + (errorMessage ? errorMessage : '')), 500) || this;
    }
    return ServerErrorResponse;
}(BaseErrorResponse_1.default));
exports.default = ServerErrorResponse;
