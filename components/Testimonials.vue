<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import {onMounted, onUnmounted, ref} from 'vue';

const modules = [Pagination, Autoplay];

const testimonials = ref([
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    comment: "Entreprise très sérieuse, à l ' écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    fullName: "Jennifer .A",
    position: "Utilisatrice",
    imageUrl: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  }
])

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
  // @ts-ignore
  const swiper = document.querySelector('.swiperTestimonials')?.swiper;
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
  <div class="flex flex-col items-center justify-center gap-4 marge bg-tertiary py-20">
    <h2 class="font-canveat text-4xl text-primary">
      Les Avis
    </h2>
    <h1 class="text-5xl font-bold text-center md:text-left capitalize">
      Ce qu'on dit de nous
    </h1>
    <ClientOnly>
      <Swiper
          :modules="modules"
          :slidesPerView="getSlidesPerView()"
          :spaceBetween="30"
          :autoplay="{ delay: 10000 }"
          :speed="2000"
          class="swiperTestimonials mt-10"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index" class="relative select-none">
          <div class="p-8 bg-white rounded-lg">
            <p class="leading-loose text-gray-500">
              “{{testimonial.comment}}”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300" :src="testimonial.imageUrl" alt="avatar" />

              <div class="mx-2">
                <h1 class="font-semibold text-gray-800">{{testimonial.fullName}}</h1>
                <span class="text-sm text-gray-500">{{testimonial.position}}</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="absolute w-10 h-10 text-primary right-8 bottom-8">
              <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
            </svg>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style scoped>
.swiperTestimonials {
  width: 100%;
  height: 100%;
}
</style>