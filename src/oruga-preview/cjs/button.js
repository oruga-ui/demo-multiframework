'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
require('./Icon-8c5f2b35.js');
var Button = require('./Button-5b39a859.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Button.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OButton = Button.__vue_component__;
exports.default = Plugin;
