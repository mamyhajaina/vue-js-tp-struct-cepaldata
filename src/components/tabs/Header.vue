<template>
  <header>
    <nav>
      <ul>
        <li :class="{ active: $route.path === '/' }"><RouterLink to="/">Home</RouterLink></li>
        <li :class="{ active: $route.path === '/About' }"><RouterLink to="/About">About</RouterLink></li>
        <li :class="{ active: $route.path === '/Contact' }"><RouterLink to="/Contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.active {
  color: blue;
}
</style>
