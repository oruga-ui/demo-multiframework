<template>
  <div id="app">
    <div class="app__navigation">
        <span>Framework: </span>
        <a href="/tailwind">Tailwind</a>
        <a href="/bootstrap">Bootstrap</a>
        <a href="/bulma">Bulma</a>
        <a href="/material">Material</a>
    </div>

    <router-view :key="$route.fullPath"/>
  </div>
</template>
