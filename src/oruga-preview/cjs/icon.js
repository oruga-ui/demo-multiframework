'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var Icon = require('./Icon-8c5f2b35.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Icon.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OIcon = Icon.__vue_component__;
exports.default = Plugin;
