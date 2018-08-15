'use strict';
const path = require('path');
const middleware = require('./lib/middlewares/express');
const agendadash = require('./lib/agendash');
module.exports = (agenda, options) => {
  options = options || {};
  if (!options.middleware) {
    options.middleware = 'express';
  }

  const agendash = agendadash(agenda, options);

 
    console.log("startup agendadash");
    return middleware(agendash);
  
};
