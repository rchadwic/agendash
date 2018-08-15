'use strict';
const path = require('path');
const middleware = require('./lib/middlewares/express');
module.exports = (agenda, options) => {
  options = options || {};
  if (!options.middleware) {
    options.middleware = 'express';
  }

  const agendash = require('./lib/agendash')(agenda, options);

 
    console.log("startup agendadash");
    return middleware(agendash);
  
};
