'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./Icon-34e90cf4.js');
require('./FormElementMixin-101c22e9.js');
require('./Input-4e18cae9.js');
require('./MatchMediaMixin-8003262e.js');
require('./trapFocus-8381ef46.js');
require('./DropdownItem-fe561fb3.js');
require('./Select-678800f7.js');
var Timepicker = require('./Timepicker-3b32aaef.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Timepicker.__vue_component__);
  }

};
plugins.use(Plugin);

exports.BTimepicker = Timepicker.__vue_component__;
exports.default = Plugin;
