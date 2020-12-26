<template>
    <div>
        <h1 class="o-demo__title">Registration form made with Bootstrap</h1>
        <oruga-form />
    </div>
</template>

<script>

import '@/assets/bootstrap.css';

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
        labelClass: 'form-label',
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
    }
})

export default {

}
</script>
