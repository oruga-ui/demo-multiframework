'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./Icon-34e90cf4.js');
require('./FormElementMixin-101c22e9.js');
var Input = require('./Input-4e18cae9.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Input.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OInput = Input.__vue_component__;
exports.default = Plugin;
