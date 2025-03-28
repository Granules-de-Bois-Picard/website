<template>
  <Header />
  <TreeBanner title="Galerie">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Galerie</p>
  </TreeBanner>

  <div class="w-full bg-white">
    <div class="marge py-20 max-w-4xl mx-auto">
      <div v-if="loading" class="flex items-center justify-center w-full min-h-[400px]">
        <div class="flex flex-col items-center gap-4">
          <ArrowPathIcon class="w-10 h-10 text-primary animate-spin" />
        </div>
      </div>

      <div v-else class="space-y-2">
        <NuxtLink
            v-for="folder in folders"
            :key="folder"
            :to="'/gallery/' + folder"
            class="flex items-center p-4 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
          <div class="flex items-center gap-4">
            <!-- Icône de dossier -->
            <svg
                class="w-8 h-8 text-yellow-500 group-hover:text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>

            <!-- Nom du dossier -->
            <div>
              <h2 class="text-lg font-medium text-gray-700 group-hover:text-primary">
                {{ folder }}
              </h2>
              <p class="text-sm text-gray-500">
                Cliquez pour voir les photos
              </p>
            </div>
          </div>

          <!-- Flèche -->
          <svg
              class="w-5 h-5 ml-auto text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>

  <Footer />
  <img src="../../assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {ArrowPathIcon} from "@heroicons/vue/24/outline";

const folders = ref([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/api/galleries');
    if (response.data.success) {
      folders.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching galleries", error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: "Galerie photos - Poêles à granulés et inserts - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez notre galerie de photos de poêles à granulés, inserts à bois et réalisations d'installations. Showroom MCZ et Nobis à Corbie en Picardie."
    },
    {
      name: "keywords",
      content: "galerie poêles à granulés, photos poêles à bois, showroom MCZ, showroom Nobis, installations chauffage écologique, insert à granulés, insert à bois, poêle mixte, réalisations chauffage biomasse, photos installations Picardie"
    },
    {
      property: "og:title",
      content: "Galerie photos - Poêles à granulés et inserts - Granulés de Bois Picard"
    },
    {
      property: "og:description",
      content: "Découvrez notre galerie de photos de poêles à granulés, inserts à bois et réalisations d'installations. Showroom MCZ et Nobis à Corbie en Picardie."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://granulespicard.fr/gallery"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://granulespicard.fr/gallery"
    }
  ]
});

useHead({
  title: "Galerie photos - Poêles à granulés et réalisations - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez notre galerie de photos de poêles à granulés, poêles à bois et nos réalisations d'installations de chauffage écologique en Picardie."
    },
    {
      name: "keywords",
      content: "photos poêles à granulés, galerie poêles à bois, réalisations chauffage écologique, installation poêle Picardie, modèles poêles, intégration poêle maison"
    },
    {
      property: "og:title",
      content: "Galerie photos - Poêles à granulés et réalisations - Granulés de Bois Picard"
    },
    {
      property: "og:description",
      content: "Découvrez notre galerie de photos de poêles à granulés, poêles à bois et nos réalisations d'installations de chauffage écologique en Picardie."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://granulespicard.fr/gallery"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://granulespicard.fr/gallery"
    }
  ]
});
</script>
