"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GrocerySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true, sparse: true }
    },
    quantity: Number,
    price: Number
});
exports.default = mongoose_1.model('Grocery', GrocerySchema);
