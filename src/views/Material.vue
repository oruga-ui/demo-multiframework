<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/material.css';
import '@/assets/oruga-material.css';

import Vue from 'vue'

import Oruga from '@/oruga-preview/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: true,
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
    //menuClass: 'dropdown-menu show',
    itemClass: 'dropdown-item',
    itemActiveClass: 'active'
  },
  steps: {
    itemActiveClass: 'steps-nav-item-active',
    itemPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: 'step-marker',
    stepDividerClass: 'step-divider',
  },
  checkbox: {
    checkClass: 'form-check',
    checkCheckedClass: 'form-check-checked',
    labelClass: 'form-check-label'
  },
})

export default {

}
</script>
