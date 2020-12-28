'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');
var plugins = require('./plugins-75a06b83.js');

//
/**
 * A sidebar to use as left/right overlay or static
 * @displayName Sidebar
 * @example ./examples/Sidebar.md
 * @style _sidebar.scss
 */

var script = {
  name: 'OSidebar',
  mixins: [plugins.BaseComponentMixin],
  configField: 'sidebar',
  props: {
    /** To control the behaviour of the sidebar programmatically, use the .sync modifier (Vue 2.x) or v-model:open (Vue 3.x) to make it two-way binding */
    open: Boolean,

    /**
    * Color of the sidebar, optional
    * @values primary, info, success, warning, danger, and any other custom color
    */
    variant: [String, Object],

    /** Show an overlay like modal */
    overlay: Boolean,

    /**
     * Skeleton position in relation to the window
     * @values fixed, absolute, static
     */
    position: {
      type: String,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'sidebar.position', 'fixed');
      },
      validator: value => {
        return ['fixed', 'absolute', 'static'].indexOf(value) >= 0;
      }
    },

    /** Show sidebar in fullheight */
    fullheight: Boolean,

    /** Show sidebar in fullwidth */
    fullwidth: Boolean,

    /** Show the sidebar on right */
    right: Boolean,

    /**
     * Custom layout on mobile
     * @values fullwidth, reduce, hidden
     */
    mobile: {
      type: String,
      validator: value => {
        return ['', 'fullwidth', 'reduce', 'hidden'].indexOf(value) >= 0;
      }
    },

    /** Show a small sidebar */
    reduce: Boolean,

    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: Boolean,

    /** Expand sidebar on hover with fixed position when reduced or mobile is reduce */
    expandOnHoverFixed: Boolean,

    /**
     * Sidebar cancel options
     * @values true, false, 'escape', 'outside'
     */
    canCancel: {
      type: [Array, Boolean],
      default: () => {
        return helpers.getValueByPath(plugins.config, 'sidebar.canCancel', ['escape', 'outside']);
      }
    },

    /**
     * Callback on cancel
     */
    onCancel: {
      type: Function,
      default: () => {}
    },
    scroll: {
      type: String,
      default: () => {
        return helpers.getValueByPath(plugins.config, 'sidebar.scroll', 'clip');
      },
      validator: value => {
        return ['clip', 'keep'].indexOf(value) >= 0;
      }
    },
    rootClass: String,
    backgroundClass: String,
    contentClass: String,
    fixedClass: String,
    staticClass: String,
    absoluteClass: String,
    fullheightClass: String,
    fullwidthClass: String,
    rightClass: String,
    reduceClass: String,
    expandOnHoverClass: String,
    expandOnHoverFixedClass: String,
    mobileReduceClass: String,
    mobileHideClass: String,
    mobileFullwidthClass: String,
    variantClass: String
  },

  data() {
    return {
      isOpen: this.open,
      transitionName: null,
      animating: true,
      savedScrollTop: null
    };
  },

  computed: {
    rootClasses() {
      return [this.computedClass('rootClass', 'o-side')];
    },

    backgroundClasses() {
      return [this.computedClass('backgroundClass', 'o-side__background')];
    },

    contentClasses() {
      return [this.computedClass('contentClass', 'o-side__content'), {
        [this.computedClass('variantClass', 'o-side__content--', this.variant)]: this.variant
      }, {
        [this.computedClass('fixedClass', 'o-side__content--fixed')]: this.isFixed
      }, {
        [this.computedClass('staticClass', 'o-side__content--static')]: this.isStatic
      }, {
        [this.computedClass('absoluteClass', 'o-side__content--absolute')]: this.isAbsolute
      }, {
        [this.computedClass('fullheightClass', 'o-side__content--fullheight')]: this.fullheight
      }, {
        [this.computedClass('fullwidthClass', 'o-side__content--fullwidth')]: this.fullwidth
      }, {
        [this.computedClass('rightClass', 'o-side__content--right')]: this.right
      }, {
        [this.computedClass('reduceClass', 'o-side__content--mini')]: this.reduce
      }, {
        [this.computedClass('expandOnHoverClass', 'o-side__content--mini-expand')]: this.expandOnHover && this.mobile !== 'fullwidth'
      }, {
        [this.computedClass('expandOnHoverFixedClass', 'o-side__content--expand-mini-hover-fixed')]: this.expandOnHover && this.expandOnHoverFixed && this.mobile !== 'fullwidth'
      }, {
        [this.computedClass('mobileReduceClass', 'o-side__content--mini-mobile')]: this.mobile === 'reduce'
      }, {
        [this.computedClass('mobileHideClass', 'o-side__content--hidden-mobile')]: this.mobile === 'hide'
      }, {
        [this.computedClass('mobileFullwidthClass', 'o-side__content--fullwidth-mobile')]: this.mobile === 'fullwidth'
      }];
    },

    cancelOptions() {
      return typeof this.canCancel === 'boolean' ? this.canCancel ? helpers.getValueByPath(plugins.config, 'sidebar.canCancel', ['escape', 'outside']) : [] : this.canCancel;
    },

    isStatic() {
      return this.position === 'static';
    },

    isFixed() {
      return this.position === 'fixed';
    },

    isAbsolute() {
      return this.position === 'absolute';
    }

  },
  watch: {
    open: {
      handler(value) {
        this.isOpen = value;

        if (this.overlay) {
          this.handleScroll();
        }

        const open = this.right ? !value : value;
        this.transitionName = !open ? 'slide-prev' : 'slide-next';
      },

      immediate: true
    }
  },
  methods: {
    /**
     * White-listed items to not close when clicked.
     * Add sidebar content and all children.
     */
    whiteList() {
      const whiteList = [];
      whiteList.push(this.$refs.sidebarContent); // Add all chidren from dropdown

      if (this.$refs.sidebarContent !== undefined) {
        const children = this.$refs.sidebarContent.querySelectorAll('*');

        for (const child of children) {
          whiteList.push(child);
        }
      }

      return whiteList;
    },

    /**
    * Keypress event that is bound to the document.
    */
    keyPress({
      key
    }) {
      if (this.isFixed) {
        if (this.isOpen && (key === 'Escape' || key === 'Esc')) this.cancel('escape');
      }
    },

    /**
    * Close the Sidebar if canCancel and call the onCancel prop (function).
    */
    cancel(method) {
      if (this.cancelOptions.indexOf(method) < 0) return;
      if (this.isStatic) return;
      this.onCancel.apply(null, arguments);
      this.close();
    },

    /**
    * Call the onCancel prop (function) and emit events
    */
    close() {
      this.isOpen = false;
      this.$emit('close');
      this.$emit('update:open', false);
    },

    /**
     * Close fixed sidebar if clicked outside.
     */
    clickedOutside(event) {
      if (this.isFixed) {
        if (this.isOpen && !this.animating) {
          if (this.whiteList().indexOf(event.target) < 0) {
            this.cancel('outside');
          }
        }
      }
    },

    /**
    * Transition before-enter hook
    */
    beforeEnter() {
      this.animating = true;
    },

    /**
    * Transition after-leave hook
    */
    afterEnter() {
      this.animating = false;
    },

    handleScroll() {
      if (typeof window === 'undefined') return;

      if (this.scroll === 'clip') {
        if (this.open) {
          document.documentElement.classList.add('o-clipped');
        } else {
          document.documentElement.classList.remove('o-clipped');
        }

        return;
      }

      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

      if (this.open) {
        document.body.classList.add('o-noscroll');
      } else {
        document.body.classList.remove('o-noscroll');
      }

      if (this.open) {
        document.body.style.top = `-${this.savedScrollTop}px`;
        return;
      }

      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    }

  },

  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress);
      document.addEventListener('click', this.clickedOutside);
    }
  },

  mounted() {
    if (typeof window !== 'undefined') {
      if (this.isFixed) {
        document.body.appendChild(this.$el);
      }

      if (this.overlay && this.open) {
        this.handleScroll();
      }
    }
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress);
      document.removeEventListener('click', this.clickedOutside);

      if (this.overlay) {
        // reset scroll
        document.documentElement.classList.remove('o-clipped');
        const savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
        document.body.classList.remove('o-noscroll');
        document.documentElement.scrollTop = savedScrollTop;
        document.body.style.top = null;
      }
    }

    if (this.isFixed) {
      helpers.removeElement(this.$el);
    }
  }

};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.rootClasses},[(_vm.overlay && _vm.isOpen)?_c('div',{class:_vm.backgroundClasses}):_vm._e(),_c('transition',{attrs:{"name":_vm.transitionName},on:{"before-enter":_vm.beforeEnter,"after-enter":_vm.afterEnter}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"}],ref:"sidebarContent",class:_vm.contentClasses},[_vm._t("default")],2)])],1)};
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

exports.OSidebar = __vue_component__;
exports.default = Plugin;
