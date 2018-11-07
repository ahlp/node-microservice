"use strict";
class Router {
    constructor(app) {
        this.app = app;
    }
    setRoute(route, handler) {
        this.app.get(route, handler);
    }
    setPostRoute(route, handler) {
        this.app.post(route, handler);
    }
}
module.exports = Router;
