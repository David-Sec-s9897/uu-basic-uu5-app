"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/hello-main-error.js");

const WARNINGS = {
    Create: {
      UnsupportedKeys: {
        code: `${Errors.Create.UC_CODE}unsupportedKeys`,
      },
    },
};

class HelloMainAbl {

  constructor() {
    this.validator = Validator.load();
    // this.dao = DaoFactory.getDao("helloMain");
  }

  async sayHello(awid, dtoIn) {
    const dtoOut = {
      text: "Hello World!",
      uuAppErrorMap: {},
    };

    return dtoOut;
  }

  async sayMeHello(awid, dtoIn) {
    let validationResult = this.validator.validate("sayHelloDtoInType", dtoIn);
    // hds 1.2, 1.3
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn,
      validationResult,
      WARNINGS.Create.UnsupportedKeys.code, Errors.Create.InvalidDtoIn);

    const dtoOut = {test: ` Hello ${dtoIn.name}!`};
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

}

module.exports = new HelloMainAbl();
