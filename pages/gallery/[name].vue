<template>
  <Header />
  <TreeBanner title="Galerie">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="font-bold">/</p>
    <NuxtLink to="/gallery" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Galerie</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">{{ name }}</p>
  </TreeBanner>

  <div class="marge py-20 bg-white">
    <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
      <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
        <div class="flex flex-col items-center gap-4">
          <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
        </div>
      </div>
    </div>

    <div v-else class="masonry-grid">
      <div v-for="(imageUrl, index) in images" :key="index" class="masonry-item">
        <img
          :src="imageUrl"
          :alt="`Image ${index}`"
          class="rounded-lg cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out"
          @click="openModal(imageUrl)"
          loading="lazy"
        />
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import {ArrowPathIcon} from "@heroicons/vue/24/outline";

const route = useRoute();
const name = ref(route.params.name);
const loading = ref(true); // Initialisé à true
const images = ref<string[]>([]);
const selectedImage = ref<string | null>(null);



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
  title: () => `Galerie ${name.value} - Photos de poêles à granulés et inserts - Granulés de Bois Picard`,
  meta: [
    {
      name: "description",
      content: () => `Découvrez notre galerie de photos ${name.value} présentant nos poêles à granulés, poêles à bois, inserts et installations de chauffage écologique en Picardie. Qualibois RGE, MCZ, Nobis.`
    },
    {
      name: "keywords",
      content: () => `galerie ${name.value}, photos poêles à granulés, poêle à pellets, insert à granulés, insert à bois, chauffage écologique, MCZ, Nobis, installations Picardie, poêle mixte, chauffage biomasse, Qualibois RGE, Flamme Verte`
    },
    {
      name: "keywords",
      content: () => `photos ${name.value}, galerie poêles à granulés, images chauffage écologique, réalisations poêles à bois, installation Picardie, modèles poêles`
    },
    {
      property: "og:title",
      content: () => `Galerie ${name.value} - Photos de poêles à granulés - Granulés de Bois Picard`
    },
    {
      property: "og:description",
      content: () => `Découvrez notre galerie de photos ${name.value} présentant nos poêles à granulés, installations et réalisations de chauffage écologique en Picardie.`
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: () => `https://granulespicard.fr/gallery/${name.value}`
    }
  ],
  link: [
    {
      rel: "canonical",
      href: () => `https://granulespicard.fr/gallery/${name.value}`
    }
  ]
});
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  grid-auto-flow: dense;
}

@media (min-width: 640px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (min-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}

.masonry-item img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
