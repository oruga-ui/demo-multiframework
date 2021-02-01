'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-263ee8b1.js');
require('./Icon-34e90cf4.js');
require('./MatchMediaMixin-8003262e.js');
var Pagination = require('./Pagination-6879f014.js');

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
