'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./MatchMediaMixin-8003262e.js');
var Field = require('./Field-9ff6e3a4.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Field.__vue_component__);
  }

};
plugins.use(Plugin);

exports.OField = Field.__vue_component__;
exports.default = Plugin;
