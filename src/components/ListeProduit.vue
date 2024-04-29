<template>
  <div>
    <h1>Ajout Produit {{ now }}</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="formData.CompanyName" placeholder="Company Name"><br>
      <textarea type="text" v-model="formData.About" placeholder="About"></textarea><br>
      <button :disabled="isButtonDisabled">Ajouter</button><br>
    </form>
  </div>
  <h1>Liste Produit</h1>
  <ul v-for="product in products" :key="product.id">
    <li v-text="product['Company Name']"></li>
    <li><button @click="navigate(product.id)">Details</button></li>
  </ul>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import ProductService from '@/services/ProductService';
import Product from '@/models/Product';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';

const router = useRouter();
const products = ref<Product[]>([]);
const isButtonDisabled = ref(true);
const formData = ref({
  CompanyName: '',
  About: ''
});

onMounted(async () => {
  await allProduct();
  isButtonDisabled.value = false;
})

const insertProduct = async (data: any) => {
  try {
    console.log('data',data.value);
    const response = await ProductService.create(data.value);
    console.log('insertProduct',response);
    allProduct();
  } catch {}
};

const now = computed(() => {
  return format(Date.now(), 'dd/MM/yyyy')
});

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

const onSubmit = async () => {
  if (!formData.value.CompanyName || !formData.value.About) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
  console.log('Données du formulaire soumises avec succès :', formData.value);
  formData.value.CompanyName = '';
  formData.value.About = '';
  await insertProduct(formData.value);
};
</script>