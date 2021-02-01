'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
var Icon = require('./Icon-34e90cf4.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Icon.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OIcon = Icon.__vue_component__;
exports.default = Plugin;
