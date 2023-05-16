"use strict";
const BaseMainAbl = require("../../abl/base-main-abl.js");

class BaseMainController {
  init(ucEnv) {
    return BaseMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return BaseMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return BaseMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new BaseMainController();
