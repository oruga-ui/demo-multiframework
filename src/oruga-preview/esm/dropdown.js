import './helpers.js';
import { e as registerComponent, u as use } from './plugins-10f43392.js';
import './MatchMediaMixin-e6de3c35.js';
import './trapFocus-25a621e6.js';
import { _ as __vue_component__, a as __vue_component__$1 } from './DropdownItem-f9ff64a8.js';
export { _ as ODropdown, a as ODropdownItem } from './DropdownItem-f9ff64a8.js';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, __vue_component__);
    registerComponent(Vue, __vue_component__$1);
  }

};
use(Plugin);

export default Plugin;
