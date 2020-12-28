<template>
  <div id="app">
    <div class="navigation">
        <a v-for="framework in frameworks" :key="framework" class="navigation__item" :class="[isActive(framework) ? 'navigation__item--selected' : '']" :href="`/${framework}`">{{framework}}</a>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      frameworks : ['Tailwind', 'Bootstrap', 'Bulma']
    }
  },
  methods: {
    isActive(framework) {
      return window.location.pathname.includes(framework)
    }
  }
}
</script>
