'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');
var Icon = require('./Icon-8c5f2b35.js');
var trapFocus = require('./trapFocus-8381ef46.js');

//
/**
 * Classic modal overlay to include any content you may need
 * @displayName Modal
 * @example ./examples/Modal.md
 * @style _modal.scss
 */

var script = {
  name: 'OModal',
  components: {
    [Icon.__vue_component__.name]: Icon.__vue_component__
  },
  configField: 'modal',
  directives: {
    trapFocus: trapFocus.directive
  },
  mixins: [plugins.BaseComponentMixin],
  props: {
    /** Whether modal is active or not, use the .sync modifier (Vue 2.x) or v-model:active (Vue 3.x) to make it two-way binding */
    active: Boolean,

    /** Component to be injected, used to open a component modal programmatically. Close modal within the component by emitting a 'close' event — this.$emit('close') */
    component: [Object, Function],

    /** Text content */
    content: String,

    /** Close button text content */
    closeButtonContent: {
      type: String,
      default: '✕'
    },
    programmatic: Boolean,

    /** Props to be binded to the injected component */
    props: Object,

    /** Events to be binded to the injected component */
    events: Object,

    /** Width of the Modal */
    width: {
      type: [String, Number],
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.width', 960);
      }
    },

    /** Enable custom style on modal content */
    custom: Boolean,

    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.animation', 'zoom-out');
      }
    },

    /**
     * Can close Modal by clicking 'X', pressing escape or clicking outside
     * @values escape, x, outside, button
     */
    canCancel: {
      type: [Array, Boolean],
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.canCancel', ['escape', 'x', 'outside', 'button']);
      }
    },

    /** Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside) */
    onCancel: {
      type: Function,
      default: () => {}
    },

    /**
     * clip to remove the body scrollbar, keep to have a non scrollable scrollbar to avoid shifting background, but will set body to position fixed, might break some layouts
     * @values keep, clip
     */
    scroll: {
      type: String,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.scroll', 'keep');
      }
    },

    /** Display modal as full screen */
    fullScreen: Boolean,

    /** Trap focus inside the modal. */
    trapFocus: {
      type: Boolean,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.trapFocus', true);
      }
    },
    ariaRole: {
      type: String,
      validator: value => {
        return ['dialog', 'alertdialog'].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean,

    /** Destroy modal on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.destroyOnHide', true);
      }
    },

    /** Automatically focus modal when active */
    autoFocus: {
      type: Boolean,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'modal.autoFocus', true);
      }
    },
    rootClass: String,
    backgroundClass: String,
    contentClass: String,
    closeClass: String,
    fullScreenClass: String,

    /** Icon name */
    closeIcon: {
      type: String,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'close.icon', 'times');
      }
    },
    closeIconSize: {
      type: String,
      default: 'medium'
    }
  },

  data() {
    return {
      isActive: this.active || false,
      savedScrollTop: null,
      newWidth: helpers.toCssDimension(this.width),
      animating: true,
      destroyed: !this.active
    };
  },

  computed: {
    rootClasses() {
      return [this.computedClass('rootClass', 'o-modal')];
    },

    backgroundClasses() {
      return [this.computedClass('backgroundClass', 'o-modal__background')];
    },

    contentClasses() {
      return [{
        [this.computedClass('contentClass', 'o-modal__content')]: !this.custom
      }, {
        [this.computedClass('fullScreenClass', 'o-modal__content--fullscreen')]: this.fullScreen
      }];
    },

    closeClasses() {
      return [this.computedClass('closeClass', 'o-modal__close')];
    },

    cancelOptions() {
      return typeof this.canCancel === 'boolean' ? this.canCancel ? helpers.getValueByPath(plugins.config, 'modal.canCancel', ['escape', 'x', 'outside', 'button']) : [] : this.canCancel;
    },

    showX() {
      return this.cancelOptions.indexOf('x') >= 0;
    },

    customStyle() {
      if (!this.fullScreen) {
        return {
          maxWidth: this.newWidth
        };
      }

      return null;
    }

  },
  watch: {
    active(value) {
      this.isActive = value;
    },

    isActive(value) {
      if (value) this.destroyed = false;
      this.handleScroll();
      this.$nextTick(() => {
        if (value && this.$el && this.$el.focus && this.autoFocus) {
          this.$el.focus();
        }
      });
    }

  },
  methods: {
    handleScroll() {
      if (typeof window === 'undefined') return;

      if (this.scroll === 'clip') {
        if (this.isActive) {
          document.documentElement.classList.add('o-clipped');
        } else {
          document.documentElement.classList.remove('o-clipped');
        }

        return;
      }

      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

      if (this.isActive) {
        document.body.classList.add('o-noscroll');
      } else {
        document.body.classList.remove('o-noscroll');
      }

      if (this.isActive) {
        document.body.style.top = `-${this.savedScrollTop}px`;
        return;
      }

      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    },

    /**
    * Close the Modal if canCancel and call the onCancel prop (function).
    */
    cancel(method) {
      if (this.cancelOptions.indexOf(method) < 0) return;
      this.onCancel.apply(null, arguments);
      this.close();
    },

    /**
    * Call the onCancel prop (function).
    * Emit events, and destroy modal if it's programmatic.
    */
    close() {
      this.$emit('close');
      this.$emit('update:active', false); // Timeout for the animation complete before destroying

      if (this.programmatic) {
        this.isActive = false;
        setTimeout(() => {
          this.$destroy();
          helpers.removeElement(this.$el);
        }, 150);
      }
    },

    /**
    * Keypress event that is bound to the document.
    */
    keyPress({
      key
    }) {
      if (this.isActive && (key === 'Escape' || key === 'Esc')) this.cancel('escape');
    },

    /**
    * Transition after-enter hook
    */
    afterEnter() {
      this.animating = false;
    },

    /**
    * Transition before-leave hook
    */
    beforeLeave() {
      this.animating = true;
    },

    /**
    * Transition after-leave hook
    */
    afterLeave() {
      if (this.destroyOnHide) {
        this.destroyed = true;
      }
    }

  },

  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
    }
  },

  beforeMount() {
    // Insert the Modal component in body tag
    // only if it's programmatic
    this.programmatic && document.body.appendChild(this.$el);
  },

  mounted() {
    if (this.programmatic) this.isActive = true;else if (this.isActive) this.handleScroll();
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress); // reset scroll

      document.documentElement.classList.remove('o-clipped');
      const savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      document.body.classList.remove('o-noscroll');
      document.documentElement.scrollTop = savedScrollTop;
      document.body.style.top = null;
    }
  }

};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.animation},on:{"after-enter":_vm.afterEnter,"before-leave":_vm.beforeLeave,"after-leave":_vm.afterLeave}},[(!_vm.destroyed)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"},{name:"trap-focus",rawName:"v-trap-focus",value:(_vm.trapFocus),expression:"trapFocus"}],class:_vm.rootClasses,attrs:{"tabindex":"-1","role":_vm.ariaRole,"aria-modal":_vm.ariaModal}},[_c('div',{class:_vm.backgroundClasses,on:{"click":function($event){return _vm.cancel('outside')}}}),_c('div',{class:_vm.contentClasses,style:(_vm.customStyle)},[(_vm.component)?_c(_vm.component,_vm._g(_vm._b({tag:"component",on:{"close":_vm.close}},'component',_vm.props,false),_vm.events)):(_vm.content)?_c('div',[_vm._v(" "+_vm._s(_vm.content)+" ")]):_vm._t("default"),(_vm.showX)?_c('o-icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.animating),expression:"!animating"}],class:_vm.closeClasses,attrs:{"clickable":"","icon":_vm.closeIcon,"size":_vm.closeIconSize},nativeOn:{"click":function($event){return _vm.cancel('x')}}}):_vm._e()],2)]):_vm._e()])};
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
const ModalProgrammatic = {
  open(params) {
    let parent;

    if (typeof params === 'string') {
      params = {
        content: params
      };
    }

    const defaultParam = {
      programmatic: true
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    let slot;

    if (Array.isArray(params.content)) {
      slot = params.content;
      delete params.content;
    }

    const propsData = helpers.merge(defaultParam, params);
    const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || plugins.VueInstance;
    const ModalComponent = vm.extend(__vue_component__);
    const instance = new ModalComponent({
      parent,
      el: document.createElement('div'),
      propsData
    });

    if (slot) {
      instance.$slots.default = slot;
    }

    return instance;
  }

};
const Plugin = {
  install(Vue) {
    localVueInstance = Vue;
    plugins.registerComponent(Vue, __vue_component__);
    plugins.registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }

};
plugins.use(Plugin);

exports.ModalProgrammatic = ModalProgrammatic;
exports.OModal = __vue_component__;
exports.default = Plugin;
