<template>
  <div id="app">
    <div class="navigation" :style="`background-color: ${currentFrameworkColor}`">
        <a v-for="framework in frameworks"
          :key="framework.name"
          class="navigation__item"
          :class="[isActive(framework.path) ? 'navigation__item--selected' : '']"
          :href="`/${framework.path}`">{{framework.name}}</a>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      frameworks : [
        {
          name: 'Tailwind',
          path: 'tailwind',
          color: '#4299e1'
        },
        {
          name: 'Bootstrap 5',
          path: 'bootstrap',
          color: '#0d6efd'
        },
        {
          name: 'Bulma',
          path: 'bulma',
          color: '#00d1b2'
        },
        {
          name: 'Material',
          path: 'material',
          color: '#009688'
        },
      ]
    }
  },
  computed: {
    currentFrameworkColor () {
      let framework = this.frameworks.find(framework => window.location.pathname.toLowerCase().includes(framework.path));
      return framework.color
    }
  },
  methods: {
    isActive(frameworkPath) {
      return window.location.pathname.includes(frameworkPath)
    }
  }
}
</script>
