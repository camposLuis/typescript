"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createUser_1 = __importDefault(require("./services/createUser"));
function helloWorld(request, response) {
    var user = createUser_1.default({
        email: 'luis@gmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native', { title: 'Javascript', experience: 100 }],
    });
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
