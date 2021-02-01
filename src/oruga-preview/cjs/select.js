'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./Icon-34e90cf4.js');
require('./FormElementMixin-101c22e9.js');
var Select = require('./Select-678800f7.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Select.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OSelect = Select.__vue_component__;
exports.default = Plugin;
