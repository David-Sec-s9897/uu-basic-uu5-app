"use strict";
const HelloMainAbl = require("../../abl/hello-main-abl.js");

class HelloMainController {

  sayHello(ucEnv) {
    return HelloMainAbl.sayHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  sayMeHello(ucEnv) {
    return HelloMainAbl.sayMeHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new HelloMainController();
