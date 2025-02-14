<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import {ArrowLeftIcon, ArrowLongRightIcon, ArrowRightIcon} from "@heroicons/vue/24/solid";
import { onMounted, onUnmounted } from 'vue';

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
}

const props = defineProps<{
  products: {
    success: boolean;
    message: string;
    data: Product[];
  }
}>();

const modules = [Pagination, Autoplay];

const goToNext = () => {
  // @ts-ignore
  const swiper = document.querySelector('.swiperProducts')?.swiper;
  swiper.slideNext();
};

const goToPrev = () => {
  // @ts-ignore
  const swiper = document.querySelector('.swiperProducts')?.swiper;
  swiper.slidePrev();
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
  // @ts-ignore
  const swiper = document.querySelector('.swiperProducts')?.swiper;
  swiper.params.slidesPerView = getSlidesPerView();
  swiper.update();
};

onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView);
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
    <ClientOnly>
      <Swiper
          :modules="modules"
          :slidesPerView="getSlidesPerView()"
          :spaceBetween="30"
          :loop="true"
          :autoplay="{ delay: 2500 }"
          :speed="2000"
          class="swiperProducts mt-10"
      >
        <SwiperSlide v-for="product in products.data" :key="product.id">
          <div class="relative h-[700px] card overflow-hidden border border-gray-300 flex flex-col items-center justify-between p-8 select-none">
            <div class="w-full h-[320px] overflow-hidden flex items-center justify-center">
              <img
                  :src="product.thumbnail_url"
                  class="w-auto h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
                  :alt="product.name"
              />
            </div>
            <div class="p-4 flex flex-col items-center justify-between w-full gap-6">
              <h3 class="text-2xl font-semibold hover:text-primary transition-all duration-300 ease-in-out text-center">
                {{ product.name }}
              </h3>
              <div class="text-sm text-center flex flex-col gap-2">
                <p><strong>Marque:</strong> {{ product.brand }}</p>
                <p><strong>Type:</strong> {{ product.type }}</p>
                <p><strong>Modèle:</strong> {{ product.model }}</p>
                <p><strong>Dimensions:</strong> {{ product.dimensions }}</p>
                <p><strong>Poids:</strong> {{ product.weight }}</p>
                <p><strong>Certifications:</strong> {{ product.certifications }}</p>
              </div>
              <NuxtLink
                  :to="`/produits/${product.id}`"
                  class="text-white bg-primary px-6 py-2 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
              >
                Détails
                <ArrowLongRightIcon class="w-6 h-6 inline-block" />
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
        <div class="w-full flex items-center justify-center gap-4 mt-5 ">
          <button class="bg-tertiary p-4 rounded-full group" slot="prev" @click="goToPrev">
            <ArrowLeftIcon class="w-6 h-6 text-black transition-all group-hover:text-primary" />
          </button>
          <button class="bg-tertiary p-4 rounded-full group" slot="next" @click="goToNext">
            <ArrowRightIcon class="w-6 h-6 text-black transition-all group-hover:text-primary" />
          </button>
        </div>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped>
.swiperProducts {
  width: 100%;
  height: 100%;
}

.card {
  display: flex;
  flex-direction: column;
}

.card img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}

.card .p-4 {
  display: flex;
  flex-direction: column;
}
</style>