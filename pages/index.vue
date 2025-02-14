<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from "axios";


const url = import.meta.env.VITE_API_URL + '/public/storage/web/';
const isLoading = ref(true);
const slides = ref([]);
const products = ref<{ success: boolean; message: string; data: Product[] }>({
  success: false,
  message: '',
  data: []
});
const cards = ref([]);

async function fetchData() {
  try {
    const [slidesResponse, productsResponse, cardsResponse] = await Promise.all([
      axios.get(import.meta.env.VITE_API_URL + `/api/slides`),
      axios.get(import.meta.env.VITE_API_URL + `/api/products`),
      axios.get(import.meta.env.VITE_API_URL + `/api/gallery/nos-realisations`)
    ]);

    slides.value = slidesResponse.data.data;
    products.value = productsResponse.data;
    cards.value = cardsResponse.data.data;
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    slides.value = [];
    products.value = { success: false, message: 'Erreur de chargement', data: [] };
  } finally {
    // Ajout d'un petit délai pour une transition plus fluide
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }
}

onMounted(() => {
  fetchData();
});

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
  <div>
    <Transition name="fade">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-content">
          <div class="spinner"></div>
          <p class="loading-text">Chargement en cours...</p>
        </div>
      </div>
    </Transition>

    <template v-if="!isLoading">
      <Header />
      <BannerSlider :slides="slides" />
      <BannerSlide />
      <Spotlight />
      <MadeByUs />
      <SomeByUs :cards="cards" />
      <Services />
      <WoodPellet />
      <Products :products="products" />
      <YoutubeComponent />
      <Testimonials />
      <FaqBanner />
      <Footer />
    </template>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-text {
  font-size: 1.2rem;
  color: #FF6B00;
  margin-top: 2rem;
}

/* Spinner */
.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FF6B00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Animation de transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>