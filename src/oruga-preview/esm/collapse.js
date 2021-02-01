import { getValueByPath } from './helpers.js';
import { B as BaseComponentMixin, c as config, n as normalizeComponent, e as registerComponent, u as use } from './plugins-10f43392.js';

/**
 * An easy way to toggle what you want
 * @displayName Collapse
 * @example ./examples/Collapse.md
 * @style _collapse.scss
 */

var script = {
  name: 'OCollapse',
  mixins: [BaseComponentMixin],
  configField: 'collapse',
  props: {
    /**
     * Whether collapse is open or not, use the .sync modifier (Vue 2.x) or v-model:open (Vue 3.x) to make it two-way binding
     */
    open: {
      type: Boolean,
      default: true
    },

    /**
     * Custom animation (transition name)
     */
    animation: {
      type: String,
      default: () => {
        return getValueByPath(config, 'collapse.animation', 'fade');
      }
    },
    ariaId: {
      type: String,
      default: ''
    },

    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
      type: String,
      default: 'top',

      validator(value) {
        return ['top', 'bottom'].indexOf(value) > -1;
      }

    },
    rootClass: [String, Function, Array],
    triggerClass: [String, Function, Array],
    contentClass: [String, Function, Array]
  },

  data() {
    return {
      isOpen: this.open
    };
  },

  watch: {
    open(value) {
      this.isOpen = value;
    }

  },
  methods: {
    /**
    * Toggle and emit events
    */
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('update:open', this.isOpen);
      this.$emit(this.isOpen ? 'open' : 'close');
    }

  },

  render(h) {
    const trigger = h('div', {
      staticClass: this.computedClass('triggerClass', 'o-clps__trigger'),
      on: {
        click: this.toggle
      }
    }, this.$scopedSlots.trigger ? this.$scopedSlots.trigger({
      open: this.isOpen
    }) : this.$slots.trigger);
    const content = h('transition', {
      props: {
        name: this.animation
      }
    }, [h('div', {
      staticClass: this.computedClass('contentClass', 'o-clps__content'),
      attrs: {
        'id': this.ariaId,
        'aria-expanded': this.isOpen
      },
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, this.$slots.default)]);
    return h('div', {
      staticClass: this.computedClass('rootClass', 'o-clps')
    }, this.position === 'top' ? [trigger, content] : [content, trigger]);
  }

};

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    {},
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
    registerComponent(Vue, __vue_component__);
  }

};
use(Plugin);

export default Plugin;
export { __vue_component__ as OCollapse };
