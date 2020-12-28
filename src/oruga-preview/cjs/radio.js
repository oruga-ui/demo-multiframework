'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var CheckRadioMixin = require('./CheckRadioMixin-b0946540.js');

//
/**
 * Select an option from a set
 * @displayName Radio
 * @example ./examples/Radio.md
 * @style _radio.scss
 */

var script = {
  name: 'ORadio',
  mixins: [plugins.BaseComponentMixin, CheckRadioMixin.CheckRadioMixin],
  configField: 'radio',
  props: {
    rootClass: String,
    disabledClass: String,
    checkClass: String,
    labelClass: String,
    sizeClass: String,
    variantClass: String
  },
  computed: {
    rootClasses() {
      return [this.computedClass('rootClass', 'o-radio'), {
        [this.computedClass('sizeClass', 'o-radio--', this.size)]: this.size
      }, {
        [this.computedClass('disabledClass', 'o-radio--disabled')]: this.disabled
      }, {
        [this.computedClass('variantClass', 'o-radio--', this.variant)]: this.variant
      }];
    },

    checkClasses() {
      return [this.computedClass('checkClass', 'o-radio__check'), {
        [this.computedClass('checkCheckedClass', 'o-radio__check--checked')]: this.value === this.nativeValue
      }];
    },

    labelClasses() {
      return [this.computedClass('labelClass', 'o-radio__label')];
    }

  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{ref:"label",class:_vm.rootClasses,attrs:{"disabled":_vm.disabled},on:{"click":_vm.focus,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.$refs.label.click()}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.computedValue),expression:"computedValue"}],ref:"input",attrs:{"type":"radio","disabled":_vm.disabled,"required":_vm.required,"name":_vm.name},domProps:{"value":_vm.nativeValue,"checked":_vm._q(_vm.computedValue,_vm.nativeValue)},on:{"click":function($event){$event.stopPropagation();},"change":function($event){_vm.computedValue=_vm.nativeValue;}}}),_c('span',{class:_vm.checkClasses}),_c('span',{class:_vm.labelClasses},[_vm._t("default")],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/plugins.normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

const Plugin = {
  install(Vue) {
    plugins.registerComponent(Vue, __vue_component__);
  }

};
plugins.use(Plugin);

exports.ORadio = __vue_component__;
exports.default = Plugin;
