<template>
    <div>
        <h1 class="o-demo__title">Registration form made with Material</h1>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/material.css';

import Vue from 'vue'

// @ts-ignore
import Oruga from '@oruga-ui/oruga'

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
    icon: {
        override: true
    }
})

export default {

}
</script>
