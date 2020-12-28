<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bulma.css';
import '@/assets/oruga-bulma.css';

import Vue from 'vue'

import Oruga from '@/oruga-preview/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: false,
  button: {
    rootClass: 'button',
    outlinedClass: (variant) => {
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
  },
  dropdown: {
    rootClass: 'dropdown is-active',
    itemClass: 'dropdown-item',
    itemActiveClass: 'is-active'
  },
  steps: {
    itemActiveClass: 'steps-nav-item-active',
    itemPreviousClass: 'steps-nav-item-previous',
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
