<template>
  <Header />
  <TreeBanner title="Galerie">
    <NuxtLink to="/public" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="font-bold">/</p>
    <NuxtLink to="/gallery" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Galerie</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Poêles à granulés</p>
  </TreeBanner>

  <div class="marge py-20 bg-white">
    <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
      <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
        <div class="flex flex-col items-center gap-4">
          <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
        </div>
      </div>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(group, index) in imageGroups" :key="index" class="grid gap-4">
        <div v-for="(imageUrl, imgIndex) in group" :key="imgIndex">
          <img
              :src="imageUrl"
              :alt="`Image ${index}-${imgIndex}`"
              class="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              @click="openModal(imageUrl)"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="selectedImage"
       class="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
       @click="closeModal">
    <div class="relative max-w-[90vw] max-h-[90vh]" @click.stop>
      <img
          :src="selectedImage"
          class="max-w-full max-h-[85vh] object-contain rounded-lg"
      />
      <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white hover:text-primary transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>

  <Footer />
  <img src="../../assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-screen object-cover -z-10" />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import {ArrowPathIcon} from "@heroicons/vue/24/outline";

const route = useRoute();
const name = ref(route.params.name);
const loading = ref(true); // Initialisé à true
const images = ref<string[]>([]);
const selectedImage = ref<string | null>(null);

const imageGroups = computed(() => {
  const groups = [];
  const itemsPerGroup = Math.ceil(images.value.length / 4);

  for (let i = 0; i < 4; i++) {
    const start = i * itemsPerGroup;
    const end = start + itemsPerGroup;
    const group = images.value.slice(start, end);
    if (group.length) {
      groups.push(group);
    }
  }

  return groups;
});

const openModal = (imageUrl: string) => {
  selectedImage.value = imageUrl;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = '';
};

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/${name.value}`);
    if (response.data.success) {
      images.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching galleries", error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: "Photos Poêles à granulés - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez notre galerie de poêles à granulés."
    }
  ]
});
</script>
