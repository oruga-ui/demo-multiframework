<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bulma.css';
import '@/assets/oruga-bulma.css';

import Vue from 'vue'

import Oruga from '@oruga-ui/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: true,
  button: {
    rootClass: 'button',
    outlinedClass: () => {
      return 'is-outlined' // Outline class does not dependent on variants
    },
    disabledClass: 'btn-disabled',
    variantClass: 'is-'
  },
  field: {
    groupedClass: 'field--grouped',
    rootClass: 'field',
    labelClass: 'label',
    messageClass: 'form-text',
    variantClass: 'field-'
  },
  input: {
    inputClass: 'input',
    variantClass: 'is-',
    iconRightClass: 'input-icon-right'
  },
  icon: {
    variantClass: 'input-icon-'
  },
  dropdown: {
    rootClass: 'dropdown is-active',
    itemClass: 'dropdown-item',
    itemActiveClass: 'is-div-active'
  },
  steps: {
    itemHeaderActiveClass: 'steps-nav-item-active',
    itemHeaderPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: 'step-marker',
    stepDividerClass: 'step-divider',
  },
  checkbox: {
    override: true,
    rootClass: 'checkbox',
    labelClass: 'checkbox-label',
  },
})

export default {

}
</script>
