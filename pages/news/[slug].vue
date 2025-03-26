<template>
  <Header />
  <TreeBanner :title="article?.title || 'Actualités'">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="font-bold">/</p>
    <NuxtLink to="/news" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Actualités</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">{{ article?.title }}</p>
  </TreeBanner>
  <div class="marge py-20 flex flex-wrap justify-center gap-8 bg-white">
    <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
      <div class="flex flex-col items-center gap-4">
        <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
      </div>
    </div>
    <div v-else-if="article" class="w-full max-w-4xl">
      <img :src="article.thumbnail" :alt="article.title" class="w-full h-64 object-cover mb-8 rounded-lg shadow-lg" />
      <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ article.title }}</h1>
      <p class="text-gray-600 mb-8 text-lg">{{ article.short_description }}</p>
      <div v-html="article.content" class="article-content prose prose-lg max-w-none"></div>
      <NuxtLink to="/news" class="text-primary hover:text-primary-dark transition-all duration-300 ease-in-out flex items-center gap-2 mt-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Retour à la liste des articles</span>
      </NuxtLink>
    </div>
    <div v-else class="text-center">
      <p class="text-xl font-semibold text-gray-800">Article non trouvé</p>
    </div>
  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { ArrowPathIcon, ArrowLeftIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const loading = ref(true);
const article = ref(null);
const slug = ref(route.params.slug);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/api/articles/${slug.value}`);
    if (response.data.success) {
      article.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching article:", error);
  } finally {
    loading.value = false;
  }
});

watch(() => article.value, (newArticle) => {
  if (newArticle) {
    useHead({
      title: () => `${newArticle.title} - Granulés de Bois Picard`,
      meta: [
        {
          name: "description",
          content: () => newArticle.short_description || "Aucune description"
        },
        {
          name: "keywords",
          content: () => `poêle à granulés, chauffage écologique, ${newArticle.title}, Picardie, économie d'énergie, granulés de bois`
        },
        {
          property: "og:title",
          content: () => `${newArticle.title} - Granulés de Bois Picard`
        },
        {
          property: "og:description",
          content: () => newArticle.short_description || "Aucune description"
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: () => `https://granulespicard.fr/news/${newArticle.slug}`
        },
        {
          property: "og:image",
          content: () => newArticle.thumbnail || "https://granulespicard.fr/logo.png"
        },
        {
          property: "article:published_time",
          content: () => newArticle.created_at
        }
      ],
      link: [
        {
          rel: "canonical",
          href: () => `https://granulespicard.fr/news/${newArticle.slug}`
        }
      ]
    });
  }
}, { immediate: true });
</script>
<style>
.article-content h1 {
  @apply text-3xl font-bold mb-4 mt-8 text-gray-800;
}

.article-content h2 {
  @apply text-2xl font-semibold mb-3 mt-6 text-gray-800;
}

.article-content h3 {
  @apply text-xl font-medium mb-2 mt-4 text-gray-800;
}

.article-content p {
  @apply mb-4 text-gray-700 leading-relaxed;
}

.article-content ul, .article-content ol {
  @apply mb-4 pl-5;
}

.article-content li {
  @apply mb-2 text-gray-700;
}

.article-content a {
  @apply text-blue-600 hover:text-blue-800 underline;
}

.article-content img {
  @apply max-w-full h-auto rounded-lg shadow-md my-4;
}

.article-content blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600;
}
</style>