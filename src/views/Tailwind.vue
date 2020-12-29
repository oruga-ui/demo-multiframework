<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/tailwindcss.css';
import '@/assets/oruga-tailwindcss.css';

import Vue from 'vue'

import Oruga from '@/oruga-preview/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: true,
  button: {
    rootClass: 'btn',
    variantClass: 'btn-',
    roundedClass: 'btn-rounded',
    outlinedClass: 'btn-outlined-',
    disabledClass: 'btn-disabled'
  },
  field: {
    labelClass: 'field-label',
    messageClass: 'text-xs italic',
    variantClass: 'field-'
  },
  input: {
    inputClass: 'input',
    roundedClass: 'rounded',
    variantClass: 'input-'
  },
  checkbox: {
    checkClass: 'checkbox',
    checkCheckedClass: 'checkbox-checked'
  },
  dropdown: {
    rootClass: 'dropdown',
    menuClass: 'dropdown-menu',
    itemClass: 'dropdown-item',
    itemActiveClass: 'dropdown-item-active'
  },
  steps: {
    itemActiveClass: 'steps-nav-item-active',
    itemPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: 'step-marker',
    stepDividerClass: 'step-divider',
  }
})

export default {

}
</script>
