import Sequelize from 'sequelize';
import Person from '../data/person.model';

const sequelize =  new Sequelize({
  database: 'some_db',
  dialect: 'mysql',
  username: 'root',
  password: 'test_pass',
  host: 'db',
  storage: 'mysql',
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