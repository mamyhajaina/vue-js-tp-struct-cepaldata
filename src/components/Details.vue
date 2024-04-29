
<template>
  <div>
    <h1>Détails du Produit</h1>
    <p>Product ID: {{ productId }}</p>
    <form @submit.prevent="onSubmit">
      <input type="text" :value="product['Company Name']"><br>
      <textarea type="text" :value="product.About"></textarea><br>
      <button @click="confirm()" :disabled="isButtonDisabled">Valider</button><br>
    </form>
    <a :href="urlPrecedent">R</a>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductService from '@/services/ProductService';
import Product from '@/models/Product';

const productId = ref<any>(0);
const product = ref<Product>({});
const route = useRoute();
const isButtonDisabled = ref(true);
const urlPrecedent = ref('/');

onMounted(async () => {
  productId.value = route.params.id;
  getById(productId);
})

const getById = async(productId: any)=>{
  try {
    const response = await ProductService.get(productId.value);
    product.value = response.data;
    console.log('getById',product);
    
  } catch (error) {
    
  }
}

const confirm = ()=>{
  console.log('confirm');
  showPopu();
}

const showPopu = ()=>{
  console.log('showPopu');
}
</script>


<style scoped>
</style>
