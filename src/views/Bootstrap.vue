<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bootstrap.css';
import '@/assets/oruga-bootstrap.css';

import Vue from 'vue'

import Oruga from '@oruga-ui/oruga'

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
    rootClass: 'field',
    labelClass: 'form-label',
    messageClass: 'form-text',
    variantClass: 'field-'
  },
  input: {
    inputClass: 'form-control',
    variantClass: (variant) => {
      switch (variant) {
        case 'danger':
          return 'is-invalid'
      }
    }
  },
  dropdown: {
    rootClass: 'dropdown',
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
    checkClass: 'form-check-input',
    labelClass: 'form-check-label'
  },
})

export default {

}
</script>
