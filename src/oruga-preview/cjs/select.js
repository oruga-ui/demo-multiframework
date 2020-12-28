'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
require('./Icon-8c5f2b35.js');
require('./FormElementMixin-9944c370.js');
var Select = require('./Select-abbc7d4f.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Select.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OSelect = Select.__vue_component__;
exports.default = Plugin;
