<!-- ProductsList.vue -->

<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - Price: ${{ product.price }} - Quantity: {{ product.quantity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  // Добавь другие свойства, если они есть
}
const products = ref<Array<Product>>([]);

  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/hello');
      const responseData = await response.json();
      products.value = responseData.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  </script>
  
  <style>
  /* Твои стили */
  </style>
  