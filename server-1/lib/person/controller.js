"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dao_1 = __importDefault(require("./dao"));
class Controller {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valueResponse = yield this.dao.getAll();
            res.send(JSON.stringify(valueResponse));
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(JSON.stringify(req.body));
            const person = req.body;
            const valueResponse = yield this.dao.create(person);
            res.send(JSON.stringify({ status: 200, message: 'sucesso' }));
        });
        this.dao = new dao_1.default();
    }
}
module.exports = Controller;
