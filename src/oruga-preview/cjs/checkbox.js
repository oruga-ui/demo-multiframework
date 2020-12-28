'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
require('./CheckRadioMixin-b0946540.js');
var Checkbox = require('./Checkbox-f00964c3.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Checkbox.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OCheckbox = Checkbox.__vue_component__;
exports.default = Plugin;
