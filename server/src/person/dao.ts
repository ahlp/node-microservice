import Sequelize from 'sequelize';
import Person from '../data/person.model';

const sequelize =  new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: 'rootpassword',
  host: 'localhost',
  storage: ':memory:',
});

// sequelize.addModels([Person]);
// sequelize.addModels(['../data']);

class Dao {

  db: Sequelize.Model<any, any>;
  constructor() {
    console.log('setting dao');
    this.db = sequelize.define(Person.modelName, Person.attributes, Person.options);
    this.db.sync();
  }

  async getAll() {
    return (await this.db.find()) || [];
  }
}

export = Dao;