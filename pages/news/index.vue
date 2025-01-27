<template>
  <Header />
  <TreeBanner title="Actualités">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Actualités</p>
  </TreeBanner>
  <div class="marge py-20 flex flex-wrap justify-center gap-8 bg-white">
    <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
      <div class="flex flex-col items-center gap-4">
        <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
      </div>
    </div>
    <div v-else-if="articles.length === 0" class="flex items-center justify-center w-full">
      <p class="text-2xl font-bold text-gray-500">Aucun article trouvé</p>
    </div>
    <NuxtLink v-else v-for="article in articles" :key="article.slug" :to="`/news/${article.slug}`" class="flex mb-10 flex-col items-start gap-4 w-full cursor-pointer group max-w-[1200px]">
      <div class="w-full h-[400px] transition-all duration-300 ease-in-out overflow-hidden flex items-center justify-center">
        <img :src="article.thumbnail" :alt="article.title" class="w-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out max-h-[800px]"/>
      </div>
      <p class="flex items-center gap-4 text-gray-500 font-semibold">
        <CalendarIcon class="w-6 h-6 text-primary" />
        <span class="text-primary">{{ formatDate(article.created_at) }}</span>
      </p>
      <h2 class="text-4xl font-bold">{{ article.title }}</h2>
      <p class="text-lg text-gray-500">{{ article.short_description }}</p>
    </NuxtLink>
  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import { CalendarIcon } from "@heroicons/vue/24/solid";

interface Article {
  slug: string;
  thumbnail: string;
  title: string;
  created_at: string;
  short_description: string;
}

const loading = ref(true);
const articles = ref<Article[]>([]);

onMounted(async () => {
  loading.value = true;
  await axios.get(import.meta.env.VITE_API_URL + "/api/articles/",
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
  ).then((response) => {
    articles.value = response.data.data;
    loading.value = false;
  });
});

useHead({
  title: "News - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez nos dernières actualités."
    }
  ]
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
</script>