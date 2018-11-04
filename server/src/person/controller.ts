import { Request, Response } from 'express';
import Dao from './dao';

class Controller {

  dao: Dao;

  constructor() {
    this.dao = new Dao();
  }

  get = async(req: Request, res: Response) => {
    const dao = this.dao;
    const valueResponse = await this.dao.getAll();
    res.send(JSON.stringify(valueResponse));
  }
}

export = Controller;