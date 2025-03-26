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
    const response = await axios.get(import.meta.env.VITE_API_URL + '/api/faq');
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
  title: "FAQ - Questions fréquentes sur les poêles à granulés - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Retrouvez les réponses aux questions fréquentes sur les poêles à granulés, leur installation, entretien et fonctionnement. Tout savoir sur le chauffage écologique."
    },
    {
      name: "keywords",
      content: "FAQ poêle à granulés, questions fréquentes chauffage écologique, entretien poêle à bois, installation poêle à granulés, consommation granulés, rendement poêle, économies chauffage"
    },
    {
      property: "og:title",
      content: "FAQ - Questions fréquentes sur les poêles à granulés - Granulés de Bois Picard"
    },
    {
      property: "og:description",
      content: "Retrouvez les réponses aux questions fréquentes sur les poêles à granulés, leur installation, entretien et fonctionnement. Tout savoir sur le chauffage écologique."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://granulespicard.fr/faq"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://granulespicard.fr/faq"
    }
  ]
});
</script>