<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from "axios";

const url = import.meta.env.VITE_API_URL + '/public/storage/web/';
const slides = ref([]);

async function fetchSlides() {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/api/slides`);
    slides.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors du chargement des slides:', error);
    slides.value = [];
  }
}

onMounted(() => {
  fetchSlides();
});

const cards = [
  {
    imageUrl: url + 'SLIDE_01.jpg'
  },
  {
    imageUrl: url + 'SLIDE_02.jpg'
  },
  {
    imageUrl: url + 'SLIDE_03.jpg'
  },
  {
    imageUrl: url + 'SLIDE_04.jpg'
  },
  {
    imageUrl: url + 'SLIDE_01.jpg'
  }
];

const products = [
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: true,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: false,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: true,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: false,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: true,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: false,
  },
  {
    imageUrl: url + 'stove.png',
    title: 'Poêle CMG 2000',
    description: 'Poêle à granulés innovant et élégant, performant, élégant et simple d\'utilisation',
    isOnSale: true,
  }
];

useHead({
  title: "Accueil - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez nos produits et services de chauffage écologique et économique."
    }
  ]
});
</script>

<template>
  <Header />
  <BannerSlider :slides="slides" />
  <BannerSlide />
  <Spotlight />
  <MadeByUs />
  <SomeByUs :cards="cards" />
  <Services />
  <WoodPellet />
  <Products :cards="products" />
  <YoutubeComponent />
  <Testimonials />
  <FaqBanner />
  <Footer />
</template>