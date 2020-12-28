'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
require('./Icon-8c5f2b35.js');
var Pagination = require('./Pagination-ae03b1d0.js');

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, Pagination.__vue_component__);
    plugins.registerComponent(Vue, Pagination.__vue_component__$1);
  }

};
plugins.use(Plugin);

exports.OPagination = Pagination.__vue_component__;
exports.OPaginationButton = Pagination.__vue_component__$1;
exports.default = Plugin;
