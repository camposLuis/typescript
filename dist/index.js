"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var methods_1 = require("./methods");
var app = express_1.default();
app.get('/', methods_1.helloWorld);
app.listen(3333);
