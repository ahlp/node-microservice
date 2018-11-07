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
const sequelize_1 = __importDefault(require("sequelize"));
const person_model_1 = __importDefault(require("../data/person.model"));
const sequelize = new sequelize_1.default({
    database: 'some_db',
    dialect: 'mysql',
    username: 'root',
    password: 'test_pass',
    host: 'localhost',
    port: 3306,
    storage: 'mysql',
});
// sequelize.addModels([Person]);
// sequelize.addModels(['../data']);
class Dao {
    constructor() {
        console.log('setting dao');
        this.db = sequelize.define(person_model_1.default.modelName, person_model_1.default.attributes, person_model_1.default.options);
        this.db.sync();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.db.findAll()) || [];
        });
    }
    create(person) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('try create');
            console.log(JSON.stringify(person));
            yield this.db.create(person);
        });
    }
}
module.exports = Dao;
