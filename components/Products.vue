<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import {ArrowLeftIcon, ArrowLongRightIcon, ArrowRightIcon} from "@heroicons/vue/24/solid";
import { onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  cards: {
    imageUrl: string;
    title: string;
    description: string;
    isOnSale: boolean;
  }[];
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
  <div class="flex flex-col items-center justify-center gap-4 marge py-20">
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
        <SwiperSlide v-for="(card, index) in cards" :key="index">
          <div class="relative h-[700px] card overflow-hidden border border-gray-300 flex flex-col items-center justify-between p-8 select-none">
            <img v-if="card.isOnSale" src="@/assets/promo.png" class="absolute top-0 right-0 w-20 h-20" alt="sale" />
            <img :src="card.imageUrl" class="w-full p-6 object-cover hover:scale-110 transition-all duration-300 ease-in-out"  alt="stove"/>
            <div class="p-4 flex flex-col items-center justify-between w-full gap-6">
              <h3 class="text-2xl font-semibold hover:text-primary transition-all duration-300 ease-in-out text-center">
                {{ card.title }}
              </h3>
              <p class="text-sm text-center">
                {{ card.description }}
              </p>
              <NuxtLink
                  to="/"
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
  object-fit: cover;
}

.card .p-4 {
  display: flex;
  flex-direction: column;
}
</style>
