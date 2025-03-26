<script setup lang="ts">
import { ArrowLongRightIcon, PhoneIcon, WifiIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted } from 'vue';
import axios from "axios";

interface Product {
  id: string;
  name: string;
  thumbnail_url: string;
  brand: string;
  type: string;
  model: string;
  dimensions: string;
  weight: string;
  certifications: string;
  hasWifiCompatibility: boolean;
  availableColors: string[];
}

const bestSeller = ref<Product | null>(null);
const isLoading = ref(true);
const error = ref(false);

async function fetchBestSeller() {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/api/best-seller`);
    bestSeller.value = response.data.data;
  } catch (err) {
    console.error('Erreur lors du chargement du best-seller:', err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchBestSeller();
});
</script>

<template>
  <div class="flex flex-col md:flex-row marge gap-10 pb-20 mt-20 md:mt-0">
    <div v-if="isLoading" class="w-full flex items-center justify-center py-20">
      <div class="spinner"></div>
    </div>
    
    <div v-else-if="error" class="w-full flex flex-col items-center justify-center py-20">
      <p class="text-xl text-gray-600">Impossible de charger le produit best-seller.</p>
    </div>
    
    <template v-else-if="bestSeller">
      <div class="flex-1 flex items-center justify-center">
        <img :src="bestSeller.thumbnail_url" :alt="bestSeller.name" class="w-2/3 object-contain" />
      </div>
      <div class="flex flex-col gap-4 w-full md:w-1/2 items-center justify-center md:items-start">
        <h2 class="font-canveat text-4xl text-primary">
          Notre Best-Seller
        </h2>
        <h1 class="text-5xl font-bold text-center md:text-left">
          {{ bestSeller.name }}
        </h1>
        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{{ bestSeller.brand }}</span>
            <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{{ bestSeller.type }}</span>
            <span v-if="bestSeller.hasWifiCompatibility" class="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <WifiIcon class="w-4 h-4 text-green-600" />
              Compatible Wifi
            </span>
          </div>
          <p class="text-xl text-center md:text-left">
            Ce poêle à granulés est le plus vendu de notre gamme. Il est à la fois performant, élégant et simple d'utilisation.
          </p>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <p><span class="font-medium">Modèle:</span> {{ bestSeller.model }}</p>
            <p><span class="font-medium">Dimensions:</span> {{ bestSeller.dimensions }}</p>
            <p><span class="font-medium">Poids:</span> {{ bestSeller.weight }}</p>
            <p v-if="bestSeller.certifications"><span class="font-medium">Certifications:</span> {{ bestSeller.certifications }}</p>
          </div>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-4 mt-10 flex-wrap">
          <NuxtLink
              to="/#products"
              class="text-white bg-primary px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
          >
            Voir tous nos produits
            <ArrowLongRightIcon class="w-6 h-6 inline-block" />
          </NuxtLink>
          <button class="border-gray-300 border-2 px-8 py-4 rounded-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <PhoneIcon class="w-6 h-6 text-gray-600" />
            03 22 09 83 55
          </button>
        </div>
      </div>
    </template>
    
    <div v-else class="w-full flex flex-col items-center justify-center py-20">
      <p class="text-xl text-gray-600">Aucun produit best-seller disponible pour le moment.</p>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FF6B00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
