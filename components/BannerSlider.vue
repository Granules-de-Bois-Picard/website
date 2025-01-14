<template>
  <div class="relative w-full overflow-hidden bg-black flex items-center justify-end">
    <swiper
        :modules="modules"
        effect="fade"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        class="mySwiper w-full"
        @slideChange="onSlideChange"
    >
      <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          :class="{
          'fade-in': index === currentIndex,
          'fade-out': index !== currentIndex,
        }"
          class="relative w-full flex items-center justify-start"
      >
        <img
            :src="slide.image_url"
            :alt="`Slide ${index + 1}`"
            class="absolute w-full h-full object-cover zoom-in brightness-50"
        />
        <div class="relative flex items-center justify-start min-h-[850px] z-10 marge md:pl-16 md:pr-32">
          <div class="flex flex-col w-full items-center md:items-start gap-4">
            <h2 class="font-canveat text-5xl sm:text-6xl text-primary whitespace-nowrap">
              {{ slide.title }}
            </h2>
            <p class="text-white text-5xl sm:text-7xl font-bold text-center md:text-left">
              {{ slide.text }}
            </p>
            <NuxtLink
                :to="slide.redirect_url"
                class="text-white mt-10 bg-primary px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
            >
              Découvrir
              <ArrowLongRightIcon class="w-6 h-6 inline-block" />
            </NuxtLink>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="hidden md:flex absolute z-20 flex-col items-center justify-center gap-4 right-16 top-1/2 transform -translate-y-1/2">
      <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="setCurrentIndex(index)"
          class="text-4xl font-bold transition-colors duration-300"
          :class="index === currentIndex ? 'text-primary' : 'text-white'"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </button>
    </div>

    <div class="flex md:hidden absolute z-20 items-center justify-center gap-4 left-1/2 bottom-8 transform -translate-x-1/2">
      <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="setCurrentIndex(index)"
          class="text-4xl font-bold transition-colors duration-300"
          :class="index === currentIndex ? 'text-primary' : 'text-white'"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid';

interface Slide {
  image_url: string;
  title: string;
  text: string;
  redirect_url: string;
}

const props = defineProps<{
  slides: Slide[];
}>();

const currentIndex = ref<number>(0);
const modules = [EffectFade, Pagination, Autoplay];

const setCurrentIndex = (index: number) => {
  currentIndex.value = index;
};

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex;
};

watch(currentIndex, (newIndex) => {
  // @ts-ignore
  const swiper = document.querySelector('.mySwiper')?.swiper;
  swiper?.slideToLoop(newIndex);
});
</script>

<style scoped>
.mySwiper {
  height: 100%;
}

.swiper-slide {
  height: 100%;
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.zoom-in {
  animation: zoomIn 10s infinite;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
