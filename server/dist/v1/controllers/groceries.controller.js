"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrocery = exports.updateGrocery = exports.createGrocery = exports.getGrocery = exports.getAllGroceries = void 0;
var exceptions_1 = require("../../exceptions");
var groceries_service_1 = __importDefault(require("../services/groceries.service"));
function getAllGroceries(req, res, next) {
    groceries_service_1.default.getAllGroceries()
        .then(function (groceries) { return res.status(200).json(groceries); })
        .catch(function (error) { return next(new exceptions_1.ServerErrorResponse(error)); });
}
exports.getAllGroceries = getAllGroceries;
function getGrocery(req, res, next) {
    var groceryItemId = req.params.id;
    groceries_service_1.default.getGroceryItem(groceryItemId)
        .then(function (groceryItem) {
        if (groceryItem === null) {
            return next(new exceptions_1.NotFoundErrorResponse());
        }
        res.status(200).json(groceryItem);
    })
        .catch(function (error) { return next(new exceptions_1.ServerErrorResponse(error)); });
}
exports.getGrocery = getGrocery;
function createGrocery(req, res, next) {
    var grocery = req.body;
    groceries_service_1.default.createGroceryItem(grocery)
        .then(function (grocery) { return res.status(201).json(grocery); })
        .catch(function (error) { return next(new exceptions_1.ServerErrorResponse(error)); });
}
exports.createGrocery = createGrocery;
function updateGrocery(req, res, next) {
    var groceryItemId = req.params.id;
    var groceryUpdate = req.body;
    groceries_service_1.default.updateGroceryItem(groceryItemId, groceryUpdate)
        .then(function (grocery) { return res.status(200).json(grocery); })
        .catch(function (error) { return next(new exceptions_1.ServerErrorResponse(error)); });
}
exports.updateGrocery = updateGrocery;
function deleteGrocery(req, res, next) {
    var groceryItemId = req.params.id;
    groceries_service_1.default.deleteGroceryItem(groceryItemId)
        .then(function (grocery) { return res.status(200).json(grocery); })
        .catch(function (error) { return next(new exceptions_1.ServerErrorResponse(error)); });
}
exports.deleteGrocery = deleteGrocery;
exports.default = {
    getAllGroceries: getAllGroceries,
    getGrocery: getGrocery,
    createGrocery: createGrocery,
    updateGrocery: updateGrocery,
    deleteGrocery: deleteGrocery,
};
