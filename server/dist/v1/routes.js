"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var groceries_controller_1 = __importDefault(require("./controllers/groceries.controller"));
var router = express_1.default.Router();
router.get('/groceries', groceries_controller_1.default.getAllGroceries);
router.get('/groceries/:id', groceries_controller_1.default.getGrocery);
router.post('/groceries', groceries_controller_1.default.createGrocery);
router.put('/groceries/:id', groceries_controller_1.default.updateGrocery);
router.delete('/groceries/:id', groceries_controller_1.default.deleteGrocery);
exports.default = router;
