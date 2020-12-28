'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var Field = require('./Field-4a14213c.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Field.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OField = Field.__vue_component__;
exports.default = Plugin;
