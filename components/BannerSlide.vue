<script setup lang="ts">
import {ArrowLongRightIcon} from "@heroicons/vue/24/solid";
import axios from "axios";
import {onMounted, ref} from "vue";

const lastArticle = ref<any>(null);
const apiURL = import.meta.env.VITE_API_URL;

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

onMounted(() => {
  axios.get(`${apiURL}/api/articles/last`).then((response) => {
    lastArticle.value = response.data.data;
  });
});
</script>

<template>
  <div class="flex items-center justify-end md:mr-16">
    <div v-if="lastArticle" class="relative flex items-center justify-center h-72 w-full md:w-2/3 bg-gray-800 text-white md:transform md:-translate-y-2/3 z-10 md:min-w-[40rem]">
      <div class="hidden sm:block sm:w-72 sm:h-72 bg-primary">
        <img :src="lastArticle.thumbnail" :alt="lastArticle.title" class="w-full h-full object-cover" />
      </div>
      <div class="h-full flex-1 marge md:p-8 bg-green text-white flex flex-col justify-center gap-4">
        <h1 class="text-4xl font-bold font-canveat text-primary">
          Notre dernier article
        </h1>
        <p class="text-2xl font-semibold">
          {{ lastArticle.short_description }}
        </p>
        <NuxtLink :to="`/news/${lastArticle.slug}`"
                  class="text-primary font-semibold hover:underline">
          Lire la suite
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
      </div>
      <div class="absolute h-1/3 w-32 right-0 border-0 bg-secondary transform translate-x-full translate-y-full" style="clip-path: polygon(0 0, 100% 0, 0 100%);"></div>
    </div>
  </div>
</template>

<style scoped>

</style>