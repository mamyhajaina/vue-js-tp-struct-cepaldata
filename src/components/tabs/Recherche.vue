<template>
  <input @keyup.enter="submit" v-model="input"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
const submit = () => {
  console.log('Form submitted!');
};
</script>
