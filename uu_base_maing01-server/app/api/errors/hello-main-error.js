"use strict";

const BaseMainUseCaseError = require("./base-main-use-case-error.js");
const HELLO_MAIN_ERROR_PREFIX = `${BaseMainUseCaseError.ERROR_PREFIX}helloMain/`;

const SayHello = {
  UC_CODE: `${HELLO_MAIN_ERROR_PREFIX}sayHello/`,

};

const Create = {
  UC_CODE: `${HELLO_MAIN_ERROR_PREFIX.ERROR_PREFIX}/`,

  InvalidDtoIn: class extends BaseMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};



module.exports = {
  SayHello, Create
};
