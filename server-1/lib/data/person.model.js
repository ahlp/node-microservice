"use strict";
const sequelize_typescript_1 = require("sequelize-typescript");
// @Table
// class Person extends Model<Person> {
//   @Column
//   get name(): string {
//     return 'My name is ' + this.getDataValue('name');
//   }
//   set name(value: string) {
//     this.setDataValue('name', value);
//   }
//   // @HasMany(() => Hobby)
//   // hobbies: Hobby[];
// }
const attributes = {
    name: {
        type: sequelize_typescript_1.Sequelize.STRING(25),
        allowNull: true,
    },
    cpf: {
        type: sequelize_typescript_1.Sequelize.STRING(25),
        allowNull: false,
        primaryKey: true,
    },
};
const options = {
    timestamps: false,
    paranoid: false,
    underscored: false,
    freezeTableName: true,
    tableName: 'Person',
    version: false,
};
module.exports = {
    modelName: 'Person',
    attributes: attributes,
    options: options,
};
