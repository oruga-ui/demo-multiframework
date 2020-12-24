<template>
    <div>
        <h1 class="o-demo__title">Registration form made with Bulma</h1>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bulma.css';

import Vue from 'vue'

// @ts-ignore
import Oruga from '@oruga-ui/oruga'

Vue.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'vue-fontawesome',
    statusIcon: false,
    button: {
        override: true,
        rootClass: 'button',
        outlinedClass: 'is-outlined',
        disabledClass: 'btn-disabled'
    },
    field: {
        override: true,
        rootClass: 'field',
        labelClass: 'label',
        messageClass: 'form-text',
        variantClass: 'field-'
    },
    input: {
        override: true,
        inputClass: 'input is-static',
        variantClass: ''
    },
    dropdown: {
        override: true,
        rootClass: 'dropdown is-active',
        menuClass: 'dropdown-menu dropdown-content',
        itemClass: 'dropdown-item'
    },
    'dropdown-item': {
        override: true,
        itemActiveClass: 'is-active'
    },
    icon: {
        override: true
    }
})

export default {

}
</script>
