import Sequelize from 'sequelize';

class MethodFactory {
  static sequelize: Sequelize.Sequelize;
  private static getSequelizeInstance(): Sequelize.Sequelize {
    if (MethodFactory.sequelize == null) {
      MethodFactory.sequelize = new Sequelize({
        database: 'some_db',
        dialect: 'postgres',
        username: 'root',
        password: 'test_pass',
        host: 'db',
        port: 5432,
        storage: 'postgres',
      });;
    }

    return MethodFactory.sequelize
  }

  public static getModelInstance(model: any): Sequelize.Model<{}, {}> {
    const sequelize = MethodFactory.getSequelizeInstance();
    const db = sequelize.define(model.modelName, model.attributes,
      model.options);
    return db;
  }
}

export = MethodFactory;