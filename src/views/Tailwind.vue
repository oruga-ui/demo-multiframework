<template>
    <div>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/tailwindcss.css';
import '@/assets/oruga-tailwindcss.css';

import Vue from 'vue'

// @ts-ignore
import Oruga from '@oruga-ui/oruga'

Vue.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'vue-fontawesome',
    statusIcon: false,
    button: {
        rootClass: 'btn',
        roundedClass: 'btn-rounded',
        outlinedClass: 'btn-outlined',
        disabledClass: 'btn-disabled'
    },
    field: {
        groupedClass: 'field--grouped',
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
        override: true,
        rootClass: 'dropdown',
        menuClass: 'dropdown-menu',
        itemClass: 'dropdown-item'
    },
    // steps: {
    //   itemActiveClass: 'steps-marker'
    // }
})

export default {

}
</script>
