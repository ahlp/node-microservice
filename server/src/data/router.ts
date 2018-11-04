import { Express, Request, Response } from 'express';

class Router {
  private app: Express;
  constructor(app : Express) {
    this.app = app;
  }

  setRoute (route: string, handler: ((req: Request, res: Response) => Promise<any>)): void {
    this.app.get(route, handler);
  }
}

// function Router (app : Express) {
//   this.app = app;
//   Object.defineProperty(this, 'name', {
//     get: function() { return name; }
//   });

//   Object.defineProperty(this, 'fierce', {
//     get: function() { return fierce; }
//   });
// }

// Router.prototype.toString = function() {
//   return 'A' + ' ' + ( this.fierce ? 'fierce' : 'tame' ) + ' ' + this.name;
// }

export = Router;