'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./CheckRadioMixin-b4da1f8d.js');
var Checkbox = require('./Checkbox-4ff7d0df.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Checkbox.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OCheckbox = Checkbox.__vue_component__;
exports.default = Plugin;
