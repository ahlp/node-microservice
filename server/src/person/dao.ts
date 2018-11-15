import Person from '../data/person.model';
import Sequelize from 'sequelize';
import Database from '../database';

// sequelize.addModels([Person]);
// sequelize.addModels(['../data']);

class Dao {

  private person: Sequelize.Model<{}, {}>;
  constructor() {
    console.log('setting dao');
    this.person = Database.getModelInstance(Person);
    this.person.sync();
  }

  async getAll() {
    return (await this.person.find()) || [];
  }
}

export = Dao;