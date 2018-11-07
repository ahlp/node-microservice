import Router from '../data/router';
import Controller from './controller';


export = function(router: Router) {
  const controller = new Controller();
  console.log('routing ');
  router.setRoute('/materia', controller.get);
  router.setPostRoute('/materia', controller.create);
}