import { getValueByPath } from './helpers.js';
import { B as BaseComponentMixin, c as config, n as normalizeComponent } from './plugins-10f43392.js';
import { _ as __vue_component__$1 } from './Icon-f1d8bf6f.js';

//
/**
 * The classic button, in different colors, sizes, and states
 * @displayName Button
 * @example ./examples/Button.md
 * @style _button.scss
 */

var script = {
  name: 'OButton',
  components: {
    [__vue_component__$1.name]: __vue_component__$1
  },
  configField: 'button',
  mixins: [BaseComponentMixin],
  inheritAttrs: false,
  props: {
    /**
    * Color of the control, optional
    * @values primary, info, success, warning, danger, and any other custom color
    */
    variant: [String, Object],

    /**
     * Size of button, optional
     * @values small, medium, large
     */
    size: String,

    /**
     * Button label, optional when default slot
     */
    label: String,

    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: String,

    /**
     * Icon name to show on the left
     */
    iconLeft: String,

    /**
     * Icon name to show on the right
     */
    iconRight: String,

    /**
     * Rounded style
     */
    rounded: {
      type: Boolean,
      default: () => {
        return getValueByPath(config, 'button.rounded', false);
      }
    },

    /**
     * Outlined style
     */
    outlined: Boolean,

    /**
     * Button will be expanded (full-width)
     */
    expanded: Boolean,
    inverted: Boolean,

    /**
     * Button type, like native
     */
    nativeType: {
      type: String,
      default: 'button',
      validator: value => {
        return ['button', 'submit', 'reset'].indexOf(value) >= 0;
      }
    },

    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
      type: String,
      default: 'button'
    },

    /**
     * Button will be disabled
     */
    disabled: Boolean,

    /**  @ignore */
    iconBoth: Boolean,
    // This is used internally
    rootClass: [String, Function, Array],
    outlinedClass: [String, Function, Array],
    invertedClass: [String, Function, Array],
    expandedClass: [String, Function, Array],
    roundedClass: [String, Function, Array],
    disabledClass: [String, Function, Array],
    iconClass: [String, Function, Array],
    sizeClass: [String, Function, Array],
    variantClass: [String, Function, Array]
  },
  computed: {
    rootClasses() {
      return [this.computedClass('rootClass', 'o-btn'), {
        [this.computedClass('sizeClass', 'o-btn--', this.size)]: this.size
      }, {
        [this.computedClass('variantClass', 'o-btn--', this.variant)]: this.variant
      }, {
        [this.computedClass('outlinedClass', 'o-btn--outlined')]: this.outlined && !this.variant
      }, {
        [this.computedClass('invertedClass', 'o-btn--inverted')]: this.inverted && !this.variant
      }, {
        [this.computedClass('outlinedClass', 'o-btn--outlined-', this.variant)]: this.outlined && this.variant
      }, {
        [this.computedClass('invertedClass', 'o-btn--inverted-', this.variant)]: this.inverted && this.variant
      }, {
        [this.computedClass('expandedClass', 'o-btn--expanded')]: this.expanded
      }, {
        [this.computedClass('roundedClass', 'o-btn--rounded')]: this.rounded
      }, {
        [this.computedClass('disabledClass', 'o-btn--disabled')]: this.disabled
      }];
    },

    iconClasses() {
      return [this.computedClass('iconClass', 'o-btn__icon')];
    },

    elementsWrapperClasses() {
      return [this.computedClass('elementsWrapperClass', 'o-btn__wrapper')];
    },

    computedTag() {
      if (this.disabled !== undefined && this.disabled !== false) {
        return 'button';
      }

      return this.tag;
    },

    computedNativeType() {
      if (this.tag === 'a') {
        return;
      }

      return this.nativeType;
    }

  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.computedTag,_vm._g(_vm._b({tag:"component",class:_vm.rootClasses,attrs:{"type":_vm.computedNativeType}},'component',_vm.$attrs,false),_vm.$listeners),[_c('span',{class:_vm.elementsWrapperClasses},[(_vm.iconLeft)?_c('o-icon',{class:_vm.iconClasses,attrs:{"pack":_vm.iconPack,"icon":_vm.iconLeft,"size":_vm.size,"both":_vm.iconBoth}}):_vm._e(),(_vm.label)?_c('span',[_vm._v(_vm._s(_vm.label))]):(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e(),(_vm.iconRight)?_c('o-icon',{class:_vm.iconClasses,attrs:{"pack":_vm.iconPack,"icon":_vm.iconRight,"size":_vm.size,"both":_vm.iconBoth}}):_vm._e()],1)])};
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
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
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

export { __vue_component__ as _ };
