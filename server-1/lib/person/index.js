"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const controller_1 = __importDefault(require("./controller"));
module.exports = function (router) {
    const controller = new controller_1.default();
    console.log('routing ');
    router.setRoute('/person', controller.get);
    router.setPostRoute('/person', controller.create);
};
