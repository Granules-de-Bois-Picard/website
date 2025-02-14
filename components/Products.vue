<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowLongRightIcon, ArrowRightIcon, XMarkIcon, WifiIcon } from "@heroicons/vue/24/solid";
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Product {
  id: string;
  name: string;
  thumbnail_url: string;
  brand: string;
  type: string;
  model: string;
  dimensions: string;
  weight: string;
  certifications: string;
  hasWifiCompatibility: boolean;
  availableColors: string[];
}

const props = defineProps<{
  products: {
    success: boolean;
    message: string;
    data: Product[];
  }
}>();

const route = useRoute();
const router = useRouter();

const selectedBrands = ref<string[]>([]);
const selectedTypes = ref<string[]>([]);
const selectedProduct = ref<Product | null>(null);
const isModalOpen = ref(false);

const openModal = (product: Product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal();
    }
  });
});

const initializeFiltersFromUrl = () => {
  const urlBrands = route.query.brands;
  const urlTypes = route.query.types;

  selectedBrands.value = Array.isArray(urlBrands)
      ? urlBrands as string[]
      : urlBrands
          ? [urlBrands as string]
          : [];

  selectedTypes.value = Array.isArray(urlTypes)
      ? urlTypes as string[]
      : urlTypes
          ? [urlTypes as string]
          : [];
};

const updateUrl = () => {
  const query: Record<string, string[]> = {};

  if (selectedBrands.value.length > 0) {
    query.brands = selectedBrands.value;
  }

  if (selectedTypes.value.length > 0) {
    query.types = selectedTypes.value;
  }

  router.replace({
    query,
    hash: route.hash
  });
};

const handleHashScroll = () => {
  if (route.hash === '#products') {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

watch([selectedBrands, selectedTypes], () => {
  updateUrl();
}, { deep: true });

watch(
    () => route.hash,
    (newHash) => {
      if (newHash === '#products') {
        handleHashScroll();
      }
    }
);

watch(() => route.query, () => {
  initializeFiltersFromUrl();
}, { deep: true });

const uniqueBrands = computed(() => {
  return Array.from(new Set(props.products.data.map(product => product.brand)));
});

const uniqueTypes = computed(() => {
  return Array.from(new Set(props.products.data.map(product => product.type)));
});

const filteredProducts = computed(() => {
  if (selectedBrands.value.length === 0 && selectedTypes.value.length === 0) {
    return props.products.data;
  }

  return props.products.data.filter(product => {
    const brandMatch = selectedBrands.value.length === 0 || selectedBrands.value.includes(product.brand);
    const typeMatch = selectedTypes.value.length === 0 || selectedTypes.value.includes(product.type);
    return brandMatch && typeMatch;
  });
});

const hasResults = computed(() => filteredProducts.value.length > 0);

const modules = [Pagination, Autoplay];

const goToNext = () => {
  const swiper = (document.querySelector('.swiperProducts') as any)?.swiper;
  swiper?.slideNext();
};

const goToPrev = () => {
  const swiper = (document.querySelector('.swiperProducts') as any)?.swiper;
  swiper?.slidePrev();
};

const getSlidesPerView = () => {
  const minCardWidth = 300;
  const maxCardWidth = 350;
  const windowWidth = window.innerWidth;

  if (windowWidth >= maxCardWidth * 1.5) {
    return Math.floor(windowWidth / maxCardWidth);
  } else if (windowWidth >= minCardWidth * 1.5) {
    return Math.floor(windowWidth / minCardWidth);
  } else {
    return 1;
  }
};

const updateSlidesPerView = () => {
  const swiper = (document.querySelector('.swiperProducts') as any)?.swiper;
  if (swiper) {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  }
};

onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView);
  initializeFiltersFromUrl();
  handleHashScroll();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 marge py-20" id="products">
    <h2 class="font-canveat text-4xl text-primary">
      Nos produits
    </h2>
    <h1 class="text-5xl font-bold text-center md:text-left capitalize">
      Découvrez tous nos produits
    </h1>

    <!-- Filtres -->
    <div class="w-full flex flex-col gap-6 mt-8">
      <!-- Filtres par marque -->
      <div class="flex flex-col items-center gap-2">
        <h3 class="font-semibold text-lg">Marques :</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <label v-for="brand in uniqueBrands" :key="brand" class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input
                type="checkbox"
                :value="brand"
                v-model="selectedBrands"
                class="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
            >
            <span class="select-none">{{ brand }}</span>
          </label>
        </div>
      </div>

      <!-- Filtres par type -->
      <div class="flex flex-col items-center gap-2">
        <h3 class="font-semibold text-lg">Types de produits :</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <label v-for="type in uniqueTypes" :key="type" class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input
                type="checkbox"
                :value="type"
                v-model="selectedTypes"
                class="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
            >
            <span class="select-none">{{ type }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Message quand aucun résultat -->
    <div v-if="!hasResults" class="w-full text-center py-10">
      <p class="text-xl text-gray-600">Aucun produit ne correspond à vos critères de recherche.</p>
      <button
          @click="selectedBrands = []; selectedTypes = []"
          class="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all active:scale-95"
      >
        Réinitialiser les filtres
      </button>
    </div>

    <!-- Slider -->
    <ClientOnly>
      <Swiper
          v-if="hasResults"
          :modules="modules"
          :slidesPerView="getSlidesPerView()"
          :spaceBetween="30"
          :loop="true"
          :autoplay="{ delay: 2500 }"
          :speed="2000"
          class="swiperProducts mt-10 w-full"
      >
        <SwiperSlide v-for="product in filteredProducts" :key="product.id">
          <div class="relative h-[500px] transform transition-all duration-300 hover:shadow-lg border border-gray-300 rounded-lg flex flex-col items-center justify-between p-8 select-none bg-white">
            <div class="w-full h-[320px] overflow-hidden flex items-center justify-center">
              <img
                  :src="product.thumbnail_url"
                  class="w-auto h-full object-contain transition-transform duration-300 hover:scale-110"
                  :alt="product.name"
              />
            </div>
            <div class="p-4 flex flex-col items-center justify-between w-full gap-6">
              <h3 class="text-2xl font-semibold hover:text-primary transition-colors duration-300 text-center">
                {{ product.name }}
              </h3>
              <div class="text-sm text-center flex flex-col gap-2">
                <p><span class="font-bold">Marque:</span> {{ product.brand }}</p>
                <p><span class="font-bold">Type:</span> {{ product.type }}</p>
              </div>
              <button
                  @click="openModal(product)"
                  class="text-white bg-primary px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black border-2 border-primary hover:border-gray-800 active:scale-95"
              >
                Plus de détails
                <ArrowLongRightIcon class="w-6 h-6 inline-block" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div class="w-full flex items-center justify-center gap-4 mt-5">
          <button class="bg-tertiary p-4 rounded-full transition-all duration-300 hover:shadow-md active:scale-95" slot="prev" @click="goToPrev">
            <ArrowLeftIcon class="w-6 h-6 text-black transition-colors group-hover:text-primary" />
          </button>
          <button class="bg-tertiary p-4 rounded-full transition-all duration-300 hover:shadow-md active:scale-95" slot="next" @click="goToNext">
            <ArrowRightIcon class="w-6 h-6 text-black transition-colors group-hover:text-primary" />
          </button>
        </div>
      </Swiper>
    </ClientOnly>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen && selectedProduct"
           class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
           @click="closeModal">
        <div class="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 shadow-xl transform transition-transform duration-300"
             @click.stop>
          <div class="flex flex-col md:flex-row h-full">
            <div class="md:w-1/2 h-[300px] md:h-auto relative bg-gray-50">
              <img
                  :src="selectedProduct.thumbnail_url"
                  :alt="selectedProduct.name"
                  class="w-full h-full object-contain p-8 transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div class="md:w-1/2 p-8 relative">
              <button
                  @click="closeModal"
                  class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
              >
                <XMarkIcon class="w-6 h-6" />
              </button>

              <h2 class="text-3xl font-bold mb-6">{{ selectedProduct.name }}</h2>

              <div class="space-y-6">
                <div class="space-y-3">
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Marque</span>
                    <span class="text-gray-600">{{ selectedProduct.brand }}</span>
                  </p>
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Type</span>
                    <span class="text-gray-600">{{ selectedProduct.type }}</span>
                  </p>
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Modèle</span>
                    <span class="text-gray-600">{{ selectedProduct.model }}</span>
                  </p>
                </div>

                <div class="space-y-3">
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Dimensions</span>
                    <span class="text-gray-600">{{ selectedProduct.dimensions }}</span>
                  </p>
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Poids</span>
                    <span class="text-gray-600">{{ selectedProduct.weight }}</span>
                  </p>
                </div>

                <div class="space-y-3">
                  <p class="text-lg flex items-center gap-2">
                    <span class="font-medium w-32">Wifi</span>
                    <span v-if="selectedProduct.hasWifiCompatibility"
                          class="text-green-600 flex items-center gap-1"
                    >
                      <WifiIcon class="w-5 h-5" />
                      Compatible
                    </span>
                    <span v-else class="text-gray-400">Non compatible</span>
                  </p>
                  <div class="flex items-center gap-2">
                    <span class="font-medium w-32">Couleurs</span>
                    <div class="flex gap-2">
                      <div v-for="color in selectedProduct.availableColors"
                           :key="color"
                           class="w-6 h-6 rounded-full border border-gray-200 transition-transform duration-200 hover:scale-110 cursor-pointer"
                           :style="{ backgroundColor: color }"
                           :title="color">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-gray-100">
                  <p class="text-lg flex items-start gap-2">
                    <span class="font-medium w-32">Certifications</span>
                    <span class="text-gray-600">{{ selectedProduct.certifications }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.swiperProducts {
  width: 100%;
  height: 100%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
