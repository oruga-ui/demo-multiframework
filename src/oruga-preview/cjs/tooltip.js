'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var Tooltip = require('./Tooltip-e3b74d61.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Tooltip.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OTooltip = Tooltip.__vue_component__;
exports.default = Plugin;
