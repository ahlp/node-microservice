import { Table, Column, Model, Sequelize } from 'sequelize-typescript';

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
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  // createdAt: {
  //   field: 'insertDate',
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  //   allowNull: false,
  // },
};

const options = {
  timestamps: false,
  paranoid: false,
  underscored: false,
  freezeTableName: true,
  tableName: 'Person',
  version: false,
}

export = {
  modelName: 'Person',
  attributes: attributes,
  options: options,
};