<template>
  <h1>Liste Produit</h1>
  <ul v-for="product in products" :key="product.id">
    <li v-text="product['Company Name']"></li>
    <li><button @click="navigate(product.id)">Details</button></li>
  </ul>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ProductService from '@/services/ProductService';
import Product from '@/models/Product';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref<Product[]>([]);

onMounted(async () => {
  allProduct();
})

const allProduct = async ()=>{
  try{
    const response = await ProductService.getAll();
    products.value = response.data;
    console.log("products",products);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des tutoriels :', error);
  }
}

const navigate = (id: any)=>{
  console.log('navigate to details');
  router.push({ name: 'details', params: {id} });
}
</script>