import express from 'express';
import bodyParser from 'body-parser';
import Router from './data/router';
import person from './person';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router: Router = new Router(app);

person(router);

app.listen(8081, function () {
  console.log('server listening at 8080');
});