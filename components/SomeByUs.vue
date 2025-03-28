<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";

const numbers = ref([
    0,
    0,
    0
]);

const numbersMax = ref([
    2000,
    2,
    0
]);

numbersMax.value[2] = new Date().getFullYear() - 2006;

const props = defineProps<{
    cards: string[];
}>();

const modules = [Pagination, Autoplay];
let swiper = null;

const slidesPerView = ref(1);

const getSlidesPerView = () => {
    const minCardWidth = 300;
    const maxCardWidth = 450;
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
  slidesPerView.value = getSlidesPerView();
};

onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView);
  updateSlidesPerView();

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const stopNumbers = launchNumbers();
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  // @ts-ignore
  observer.observe(document.getElementById('numbers'));
});

const launchNumbers = () => {
  const interval = setInterval(() => {
    numbers.value = numbers.value.map((number, index) => {
      if (number < numbersMax.value[index]) {
        if (numbersMax.value[index] < 100) {
          return number + 1;
        }
        return number + Math.floor(numbersMax.value[index] / 100);
      }
      return number;
    });
  }, 1);

  return () => clearInterval(interval);
};

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

const goToNext = () => {
  // @ts-ignore
  const swiper = document.querySelector('.swiperSomeByUs')?.swiper;
  swiper.slideNext();
};

const goToPrev = () => {
  // @ts-ignore
  const swiper = document.querySelector('.swiperSomeByUs')?.swiper;
  swiper.slidePrev();
};
</script>

<template>
  <div class="py-20 marge bg-linear-cut">
    <h1 class="text-5xl font-bold text-white text-center mb-8">Quelques-unes de nos réalisations</h1>
    <p class="text-white text-center">
      Découvrez nos réalisations : des installations sur mesure qui allient design élégant et performance. Chaque projet reflète notre engagement envers la qualité et la satisfaction client, en utilisant des matériaux durables et des technologies de pointe. Laissez-vous inspirer par notre savoir-faire et trouvez la solution idéale pour votre espace.
    </p>
    <div class="flex flex-wrap items-center justify-evenly gap-10 my-20" id="numbers">
        <div class="flex flex-col items-center gap-2">
          <span class="text-8xl font-bold text-primary">+{{ numbers[0] }}</span>
          <span class="text-2xl font-semibold text-white">Installations</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-8xl font-bold text-primary">{{ numbers[1] }}</span>
          <span class="text-2xl font-semibold text-white">Marques</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-8xl font-bold text-primary">{{ numbers[2] }}</span>
          <span class="text-2xl font-semibold text-white">Années d'expérience</span>
        </div>
    </div>
    <ClientOnly>
      <Swiper
          :modules="modules"
          :slidesPerView="slidesPerView"
          :spaceBetween="30"
          :loop="true"
          :autoplay="{ delay: 2500 }"
          :speed="2000"
          class="swiperSomeByUs"
      >
        <SwiperSlide v-for="(card, index) in cards" :key="index">
          <div class="h-[500px] md:h-[600px] card bg-white shadow-lg group overflow-hidden">
            <!-- hover zoom in  -->
            <img :src="card"
                 class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out" />
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

.bg-linear-cut {
  background: linear-gradient(to bottom, #203635 80%, #ffffff 80%);
}

@media (min-width: 768px) {
  .bg-linear-cut {
    background: linear-gradient(to bottom, #203635 75%, #ffffff 75%);
  }
}
</style>
