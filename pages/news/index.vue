<template>
  <Header />
  <TreeBanner title="Actualités">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Actualités</p>
  </TreeBanner>
  <div class="marge py-20 bg-white">
    <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
      <div class="flex flex-col items-center gap-4">
        <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
      </div>
    </div>
    <div v-else-if="articles.data.length === 0" class="flex items-center justify-center w-full">
      <p class="text-2xl font-bold text-gray-500">Aucun article trouvé</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtLink v-for="article in articles.data" :key="article.slug" :to="`/news/${article.slug}`" class="card">
        <div class="card-image">
          <img :src="article.thumbnail" :alt="article.title" class="w-full h-full object-cover"/>
        </div>
        <div class="card-content">
          <p class="flex items-center gap-4 text-gray-500 font-semibold">
            <CalendarIcon class="w-6 h-6 text-primary" />
            <span class="text-primary">{{ formatDate(article.created_at) }}</span>
          </p>
          <h2 class="text-2xl font-bold">{{ article.title }}</h2>
          <p class="text-lg text-gray-500">{{ article.short_description }}</p>
        </div>
      </NuxtLink>
    </div>
    <div v-if="articles.meta.pagination.total_pages > 1" class="w-full flex items-center justify-between gap-4 mt-8">
      <button
          @click="changePage(articles.meta.pagination.current_page - 1)"
          :disabled="articles.meta.pagination.current_page === 1"
          class="px-4 py-2 rounded-lg mr-2 text-white transition-all duration-200
      bg-primary disabled:bg-gray-400 disabled:cursor-not-allowed
      hover:bg-primary-dark disabled:hover:bg-gray-400"
      >
        Précédent
      </button>
      <button
          @click="changePage(articles.meta.pagination.current_page + 1)"
          :disabled="articles.meta.pagination.current_page === articles.meta.pagination.total_pages"
          class="px-4 py-2 rounded-lg text-white transition-all duration-200
      bg-primary disabled:bg-gray-400 disabled:cursor-not-allowed
      hover:bg-primary-dark disabled:hover:bg-gray-400"
      >
        Suivant
      </button>
    </div>

  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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

interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

interface ArticlesResponse {
  data: Article[];
  meta: {
    pagination: Pagination;
  };
}

const loading = ref(true);
const articles = ref<ArticlesResponse>({
  data: [],
  meta: {
    pagination: {
      total: 0,
      count: 0,
      per_page: 0,
      current_page: 0,
      total_pages: 0,
    },
  },
});

const fetchArticles = async (page = 1) => {
  loading.value = true;
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles`, {
      params: { page },
    });
    articles.value = response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  fetchArticles(page);
};

onMounted(() => {
  fetchArticles();
});

useHead({
  title: "Actualités - Innovations et tendances poêles à granulés - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Suivez les dernières actualités sur les poêles à granulés, les innovations en chauffage écologique et les tendances du marché des énergies renouvelables."
    },
    {
      name: "keywords",
      content: "actualités poêles à granulés, nouveautés chauffage écologique, tendances énergies renouvelables, innovations poêles à bois, économies d'énergie, aides financières chauffage"
    },
    {
      property: "og:title",
      content: "Actualités - Innovations et tendances poêles à granulés - Granulés de Bois Picard"
    },
    {
      property: "og:description",
      content: "Suivez les dernières actualités sur les poêles à granulés, les innovations en chauffage écologique et les tendances du marché des énergies renouvelables."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://granulespicard.fr/news"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://granulespicard.fr/news"
    }
  ]
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-content {
  padding: 1rem;
}

.card-content h2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>