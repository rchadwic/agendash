'use strict';
const path = require('path');

module.exports = (agenda, options) => {
  options = options || {};
  if (!options.middleware) {
    options.middleware = 'express';
  }

  const agendash = require('./lib/agendash')(agenda, options);

  try {
    
    return require('./lib/middlewares/express')(agendash);
  } catch (err) {
    console.log('No middleware available for ');
    throw new Error('No middleware available for ' + options.middleware);
  }
};
