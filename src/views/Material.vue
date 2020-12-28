<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/material.css';

import Vue from 'vue'

import Oruga from '@/oruga-preview/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: false,
  button: {
    rootClass: 'btn',
    outlinedClass: 'btn-outline-primary',
    disabledClass: 'btn-disabled'
  },
  field: {
    rootClass: 'form-group',
    labelClass: '',
    messageClass: 'form-text',
    variantClass: 'field-'
  },
  input: {
    inputClass: 'form-control',
    variantClass: 'input-'
  },
  dropdown: {
    override: true,
    rootClass: 'dropdown',
    menuClass: 'dropdown-menu show',
    itemClass: 'dropdown-item'
  },
  steps: {
    itemActiveClass: 'steps-nav-item-active',
    itemPreviousClass: 'steps-nav-item-previous',
    stepMarkerClass: 'step-marker',
    stepDividerClass: 'step-divider',
  },
  checkbox: {
    checkClass: 'checkbox',
    checkCheckedClass: 'checkbox-checked'
  },
})

export default {

}
</script>
