<template>
  <Header />
  <TreeBanner title="FAQ">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">FAQ</p>
  </TreeBanner>
  <div>
    <Faq :faq="faq" :loading="loading" />
  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const faq = ref([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/api/articles');
    if (response.data.success) {
      faq.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching FAQ:", error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: "FAQ - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Retrouvez les réponses aux questions les plus fréquemment posées sur les poêles à granulés."
    }
  ]
});
</script>