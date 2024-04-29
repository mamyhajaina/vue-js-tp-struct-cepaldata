
<template>
  <Recherche></Recherche>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Details.vue'
import Header from '@/components/tabs/Header.vue'
import Footer from '@/components/tabs/Footer.vue'
import Recherche from '@/components/tabs/Recherche.vue'
</script>

<style scoped>

</style>
