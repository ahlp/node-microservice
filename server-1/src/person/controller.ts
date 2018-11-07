import { Request, Response } from 'express';
import Dao from './dao';

class Controller {

  dao: Dao;

  constructor() {
    this.dao = new Dao();
  }

  get = async(req: Request, res: Response) => {
    const valueResponse = await this.dao.getAll();
    res.send(JSON.stringify(valueResponse));
  }

  create = async(req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
    const person = req.body;
    const valueResponse = await this.dao.create(person);
    res.send(JSON.stringify({ status: 200, message: 'sucesso'}));
  }
}

export = Controller;