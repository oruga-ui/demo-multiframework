'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
var Tooltip = require('./Tooltip-5c687c31.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Tooltip.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OTooltip = Tooltip.__vue_component__;
exports.default = Plugin;
