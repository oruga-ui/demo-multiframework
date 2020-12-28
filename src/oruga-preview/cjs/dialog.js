'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var Icon = require('./Icon-8c5f2b35.js');
require('./FormElementMixin-9944c370.js');
var Input = require('./Input-fe6c1f0d.js');
var Button = require('./Button-5b39a859.js');
var trapFocus = require('./trapFocus-8381ef46.js');
var Modal = require('./Modal-add1285c.js');

//
/**
 * Dialogs inform users about a specific task and may contain critical information or require decisions
 * @displayName Dialog
 * @example ./examples/Dialog.md
 */

var script = {
  name: 'ODialog',
  components: {
    [Icon.__vue_component__.name]: Icon.__vue_component__,
    [Button.__vue_component__.name]: Button.__vue_component__,
    [Input.__vue_component__.name]: Input.__vue_component__
  },
  configField: 'dialog',
  directives: {
    trapFocus: trapFocus.directive
  },
  extends: Modal.__vue_component__,
  props: {
    title: String,
    message: [String, Array],
    icon: String,
    iconPack: String,
    hasIcon: Boolean,
    variant: {
      type: String,
      default: 'primary'
    },
    size: String,
    confirmText: {
      type: String,
      default: () => {
        return plugins.config.defaultDialogConfirmText ? plugins.config.defaultDialogConfirmText : 'OK';
      }
    },
    cancelText: {
      type: String,
      default: () => {
        return plugins.config.defaultDialogCancelText ? plugins.config.defaultDialogCancelText : 'Cancel';
      }
    },
    hasInput: Boolean,
    // Used internally to know if it's prompt
    inputAttrs: {
      type: Object,
      default: () => ({})
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    container: {
      type: String,
      default: () => {
        return plugins.config.defaultContainerElement;
      }
    },
    focusOn: {
      type: String,
      default: 'confirm'
    },
    trapFocus: {
      type: Boolean,
      default: () => {
        return plugins.config.defaultTrapFocus;
      }
    },
    ariaRole: {
      type: String,
      validator: value => {
        return ['dialog', 'alertdialog'].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean
  },

  data() {
    const prompt = this.hasInput ? this.inputAttrs.value || '' : '';
    return {
      prompt,
      isActive: false,
      validationMessage: ''
    };
  },

  computed: {
    rootClasses() {
      return [this.computedClass('rootClass', 'o-dialog'), {
        [this.computedClass('fullScreenClass', 'o-dialog-fullscreen')]: this.fullScreen
      }];
    },

    backgroundClasses() {
      return [this.computedClass('backgroundClass', 'o-dialog-background')];
    },

    cardClasses() {
      return [this.computedClass('cardClass', 'o-dialog-card')];
    },

    contentClasses() {
      return [this.computedClass('contentClass', 'o-dialog-content'), {
        [this.computedClass('is-titleless', 'is-titleless')]: !this.title
      }, {
        [this.computedClass('is-flex', 'is-flex')]: this.hasIcon
      }];
    },

    headerClasses() {
      return [this.computedClass('headerClass', 'o-dialog-header')];
    },

    footerClasses() {
      return [this.computedClass('footerClass', 'o-dialog-footer')];
    },

    closeClasses() {
      return [this.computedClass('closeClass', 'o-dialog-close')];
    },

    /**
     * Icon name (MDI) based on the type.
     */
    iconByVariant() {
      switch (this.variant) {
        case 'info':
          return 'information';

        case 'success':
          return 'check-circle';

        case 'warning':
          return 'alert';

        case 'danger':
          return 'alert-circle';

        default:
          return null;
      }
    },

    showCancel() {
      return this.cancelOptions.indexOf('button') >= 0;
    }

  },
  methods: {
    /**
     * If it's a prompt Dialog, validate the input.
     * Call the onConfirm prop (function) and close the Dialog.
     */
    confirm() {
      if (this.$refs.input !== undefined) {
        if (!this.$refs.input.checkValidity()) {
          this.validationMessage = this.$refs.input.validationMessage;
          this.$nextTick(() => this.$refs.input.select());
          return;
        }
      }

      this.$emit('confirm', this.prompt);
      this.onConfirm(this.prompt, this);
      if (this.closeOnConfirm) this.close();
    },

    /**
     * Close the Dialog.
     */
    close() {
      this.isActive = false; // Timeout for the animation complete before destroying

      setTimeout(() => {
        this.$destroy();
        helpers.removeElement(this.$el);
      }, 150);
    }

  },

  beforeMount() {
    // Insert the Dialog component in the element container
    if (typeof window !== 'undefined') {
      this.$nextTick(() => {
        const container = document.querySelector(this.container) || document.body;
        container.appendChild(this.$el);
      });
    }
  },

  mounted() {
    this.isActive = true;

    if (typeof this.inputAttrs.required === 'undefined') {
      this.$set(this.inputAttrs, 'required', true);
    }

    this.$nextTick(() => {
      // Handle which element receives focus
      if (this.hasInput) {
        this.$refs.input.focus();
      } else if (this.focusOn === 'cancel' && this.showCancel) {
        this.$refs.cancelButton.focus();
      } else {
        this.$refs.confirmButton.$el.focus();
      }
    });
  }

};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.animation}},[(_vm.isActive)?_c('div',{directives:[{name:"trap-focus",rawName:"v-trap-focus",value:(_vm.trapFocus),expression:"trapFocus"}],class:_vm.rootClasses,attrs:{"role":_vm.ariaRole,"aria-modal":_vm.ariaModal}},[_c('div',{class:_vm.backgroundClasses,on:{"click":function($event){return _vm.cancel('outside')}}}),_c('div',{class:_vm.cardClasses},[(_vm.title)?_c('header',{class:_vm.headerClasses},[_c('p',[_vm._v(_vm._s(_vm.title))])]):_vm._e(),_c('section',{class:_vm.contentClasses,style:(_vm.customStyle)},[_c('div',{staticClass:"media"},[(_vm.hasIcon && (_vm.icon || _vm.iconByVariant))?_c('div',{staticClass:"media-left"},[_c('o-icon',{attrs:{"icon":_vm.icon ? _vm.icon : _vm.iconByVariant,"pack":_vm.iconPack,"variant":_vm.variant,"both":!_vm.icon,"size":"large"}})],1):_vm._e(),_c('div',{staticClass:"media-content"},[_c('p',[(_vm.$slots.default)?[_vm._t("default")]:[_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]],2),(_vm.hasInput)?_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('o-input',_vm._b({ref:"input",class:{ 'danger': _vm.validationMessage },on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirm($event)}},model:{value:(_vm.prompt),callback:function ($$v) {_vm.prompt=$$v;},expression:"prompt"}},'o-input',_vm.inputAttrs,false))],1),_c('p',{staticClass:"danger"},[_vm._v(_vm._s(_vm.validationMessage))])]):_vm._e()])])]),_c('footer',{class:_vm.footerClasses},[(_vm.showCancel)?_c('o-button',{ref:"cancelButton",attrs:{"native-type":"button"},on:{"click":function($event){return _vm.cancel('button')}}},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e(),_c('o-button',{ref:"confirmButton",attrs:{"native-type":"button"},on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.confirmText))])],1)])]):_vm._e()])};
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

let localVueInstance;

function open(propsData) {
  let slot;

  if (Array.isArray(propsData.message)) {
    slot = propsData.message;
    delete propsData.message;
  }

  const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || plugins.VueInstance;
  const DialogComponent = vm.extend(__vue_component__);
  const component = new DialogComponent({
    el: document.createElement('div'),
    propsData
  });

  if (slot) {
    component.$slots.default = slot;
    component.$forceUpdate();
  }

  if (!plugins.config.defaultProgrammaticPromise) {
    return component;
  } else {
    return new Promise(resolve => {
      component.$on('confirm', event => resolve({
        result: event || true,
        dialog: component
      }));
      component.$on('cancel', () => resolve({
        result: false,
        dialog: component
      }));
    });
  }
}

const DialogProgrammatic = {
  alert(params) {
    if (typeof params === 'string') {
      params = {
        message: params
      };
    }

    const defaultParam = {
      canCancel: false
    };
    const propsData = helpers.merge(defaultParam, params);
    return open(propsData);
  },

  confirm(params) {
    const defaultParam = {};
    const propsData = helpers.merge(defaultParam, params);
    return open(propsData);
  },

  prompt(params) {
    const defaultParam = {
      hasInput: true,
      confirmText: 'Done'
    };
    const propsData = helpers.merge(defaultParam, params);
    return open(propsData);
  }

};
const Plugin = {
  install(Vue) {
    localVueInstance = Vue;
    plugins.registerComponent(Vue, __vue_component__);
    plugins.registerComponentProgrammatic(Vue, 'dialog', DialogProgrammatic);
  }

};
plugins.use(Plugin);

exports.BDialog = __vue_component__;
exports.DialogProgrammatic = DialogProgrammatic;
exports.default = Plugin;
