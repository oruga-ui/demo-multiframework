<template>
    <div>
        <h1 class="o-demo__title">Registration form made with Tailwind</h1>
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
        override: true,
        rootClass: 'btn',
        roundedClass: 'btn-rounded',
        outlinedClass: 'btn-outlined',
        disabledClass: 'btn-disabled'
    },
    field: {
        override: true,
        labelClass: 'field-label',
        messageClass: 'text-xs italic',
        variantClass: 'field-'
    },
    input: {
        override: true,
        inputClass: 'input focus:outline-none focus:shadow-outline',
        roundedClass: 'rounded',
        variantClass: 'input-'
    },
    dropdown: {
        override: true,
        rootClass: 'dropdown',
        menuClass: 'dropdown-menu',
        itemClass: 'dropdown-item'
    },
    icon: {
        override: true
    }
})

export default {

}
</script>
