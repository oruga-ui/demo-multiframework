<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bootstrap.css';
import '@/assets/oruga-bootstrap.css';

import Vue from 'vue'

import Oruga from '@/oruga-preview/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: false,
  button: {
    rootClass: 'btn',
    outlinedClass: 'btn-outline-',
    disabledClass: 'btn-disabled',
    variantClass: (variant, context) => { // Apply variant when the element is not outline
      if (!context.props.outlined) {
        return `btn-${variant}`
      }
    }
  },
  field: {
    groupedClass: 'field--grouped',
    labelClass: 'form-label',
    messageClass: 'form-text',
    variantClass: 'field-'
  },
  input: {
    inputClass: 'form-control',
    variantClass: 'input-'
  },
  dropdown: {
    rootClass: 'dropdown',
    itemClass: 'dropdown-item'
  },
  steps: {
    itemActiveClass: 'steps-nav-item-active',
    itemPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: 'step-marker',
    stepDividerClass: 'step-divider',
  },
  checkbox: {
    checkClass: 'form-check-input',
    labelClass: 'form-check-label'
  },
})

export default {

}
</script>
