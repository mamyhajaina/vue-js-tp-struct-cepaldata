
<template>
  <div>
    <h1>Détails du Produit</h1>
    <p>Product ID: {{ productId }}</p>
    <input type="text" :value="product['Company Name']"><br>
    <textarea type="text" :value="product.About"></textarea><br>
    <button @click="confirm()">Valider</button>
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
