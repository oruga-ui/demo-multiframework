'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
require('./Icon-8c5f2b35.js');
require('./FormElementMixin-9944c370.js');
require('./Input-fe6c1f0d.js');
var autocomplete = require('./autocomplete.js');
require('./Button-5b39a859.js');
var button = require('./button.js');
require('./CheckRadioMixin-b0946540.js');
require('./Checkbox-f00964c3.js');
var checkbox = require('./checkbox.js');
var collapse = require('./collapse.js');
require('./trapFocus-8381ef46.js');
var dropdown = require('./dropdown.js');
require('./Field-4a14213c.js');
var field = require('./field.js');
var icon = require('./icon.js');
var input = require('./input.js');
require('./ssr-39c7e185.js');
require('./Loading-eaeb412c.js');
var loading = require('./loading.js');
var modal = require('./modal.js');
require('./Pagination-ae03b1d0.js');
var pagination = require('./pagination.js');
var radio = require('./radio.js');
require('./Select-abbc7d4f.js');
var select = require('./select.js');
var skeleton = require('./skeleton.js');
var sidebar = require('./sidebar.js');
require('./Tooltip-e3b74d61.js');
var slider = require('./slider.js');
require('./SlotComponent-0a757062.js');
require('./TabbedChildMixin-38fc1265.js');
var steps = require('./steps.js');
var _switch = require('./switch.js');
var table = require('./table.js');
var tabs = require('./tabs.js');
var tooltip = require('./tooltip.js');
var upload = require('./upload.js');

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Autocomplete: autocomplete.default,
    Button: button.default,
    Checkbox: checkbox.default,
    Collapse: collapse.default,
    Dropdown: dropdown.default,
    Field: field.default,
    Icon: icon.default,
    Input: input.default,
    Loading: loading.default,
    Modal: modal.default,
    Pagination: pagination.default,
    Radio: radio.default,
    Select: select.default,
    Skeleton: skeleton.default,
    Sidebar: sidebar.default,
    Slider: slider.default,
    Steps: steps.default,
    Switch: _switch.default,
    Table: table.default,
    Tabs: tabs.default,
    Tooltip: tooltip.default,
    Upload: upload.default
});

const Oruga = {
  install(Vue, options = {}) {
    plugins.setVueInstance(Vue); // Options

    plugins.setOptions(helpers.merge(plugins.config, options, true)); // Components

    for (const componentKey in components) {
      plugins.registerPlugin(Vue, components[componentKey]);
    } // Config component


    plugins.registerComponentProgrammatic(Vue, 'config', plugins.Programmatic);
  }

};
plugins.use(Oruga);

exports.Config = plugins.Plugin;
exports.Autocomplete = autocomplete.default;
exports.Button = button.default;
exports.Checkbox = checkbox.default;
exports.Collapse = collapse.default;
exports.Dropdown = dropdown.default;
exports.Field = field.default;
exports.Icon = icon.default;
exports.Input = input.default;
exports.Loading = loading.default;
exports.LoadingProgrammatic = loading.LoadingProgrammatic;
exports.Modal = modal.default;
exports.ModalProgrammatic = modal.ModalProgrammatic;
exports.Pagination = pagination.default;
exports.Radio = radio.default;
exports.Select = select.default;
exports.Skeleton = skeleton.default;
exports.Sidebar = sidebar.default;
exports.Slider = slider.default;
exports.Steps = steps.default;
exports.Switch = _switch.default;
exports.Table = table.default;
exports.Tabs = tabs.default;
exports.Tooltip = tooltip.default;
exports.Upload = upload.default;
exports.default = Oruga;
