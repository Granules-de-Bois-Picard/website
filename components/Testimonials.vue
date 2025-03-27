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
    "comment": "Une equipe très professionnelle qui a su mener à bien un chantier qui, d'après d'autres installateurs était quasi impossible (Il s'agit d'une pose d'un insert à granulés dans une cheminée existante). Le chantier a été réalisé en 1/2 journée. Je suis ravi de voir qu'il existe encore de vrais techniciens et pas seulement des commerciaux. Je recommande vraiment cet installateur si vous cherchez du professionnalisme, des conseils et une équipe sympathique.",
    "fullName": "Florent Gallet Carnaby",
    "position": "Utilisateur",
    "imageUrl": "https://lh3.googleusercontent.com/a-/ALV-UjVEtnU5Qc6l9mCEhnZRWaIOEcPPh_cdAt_PUYv4uo_3y_WcShv4=s120-c-rp-mo-br100"
  },
  {
    "comment": "Poêle installé depuis plus de 7 mois maintenant, rien à redire. Installation propre, équipe très réactif et toujours disponible en cas de problème. Je recommande fortement.",
    "fullName": "Cedric Marelille",
    "position": "Utilisateur",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocIzZ4zS1AYhdAL_9ISkWJ3WmdUUK3YIPpqqc8WT19lKseTi2A=s120-c-rp-mo-br100"
  },
  {
    "comment": "Cela fera 11 ans que l'entreprise familiale a installé ce poêle à granulés. Les normes ont évolués, et bien dans un souci de conscience et de ''rassurance'', GRANULES DE BOIS PICARD MCZ A CORBIE, Artisans engagés et fiables ont su aussi me satisfaire à cette remise aux normes alors qu'elle n'en était même pas tenu. Bravo et félicitations !!",
    "fullName": "Pierre Coutelier",
    "position": "Utilisateur",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocJYXWwrOakk-QOZxMu9pt34jEcfOcNhqeXMdUxTPLZ_9h0rRg=s120-c-rp-mo-br100"
  },
  {
    "comment": "Nous avons installé un poêle à granules par le biais de cette entreprise. L'équipe est très professionnelle, travail propre, soigné, et d'une très grande propreté et de qualité. Je la recommande vivement.",
    "fullName": "Laurence Bernard",
    "position": "Utilisatrice",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocLI3YKmkNNXaS8EBaU0w0KEuz04rQfV_--ILgRbCzz_XXfLVw=s120-c-rp-mo-br100"
  },
  {
    "comment": "Installation effectuée fin août dernier. Une équipe très professionnelle et à l'écoute. Chantier hyper soigné et très propre. Félicitations ! Nous recommandons vivement cet installateur.",
    "fullName": "Stef Dess",
    "position": "Utilisateur",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocKaRB-mjA49tNYWQPSweWahENcZgSflMtYmj7ZYJwGOb0e3Kg=s120-c-rp-mo-br100"
  },
  {
    "comment": "Poêle ego maestro fraîchement installé, je suis satisfaite de mon achat. Très bien conseillée lors du choix du poêle, j'ai fait confiance à granulés de bois picard. Quant à l'installation du poêle, rien à redire. Travail très propre, je suis dautant plus ravis. 😁😁. Merci à vous 3 👌👌",
    "fullName": "ROUSSEAUX Laetitia",
    "position": "Utilisatrice",
    "imageUrl": "https://lh3.googleusercontent.com/a-/ALV-UjVh6qVd7LgppIraIc_ptyIgeaDGozwOnM4Xx6_m03okkWKISEA=s120-c-rp-mo-br100"
  },
  {
    "comment": "Entreprise sérieuse qui donne de bons conseils sur le choix du poêle. Nous propose celui qui correspond à nos besoins sans pour autant nous proposer le modèle le plus cher. Valentin est très professionnel et minutieux lors de la pose du poêle. Équipe au top",
    "fullName": "Cindy Pecqueux",
    "position": "Utilisatrice",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocKyMayr3mudVtJz5XZGBKqqTeVGigq7MYjv9Ji0JoQrjYLa3A=s120-c-rp-mo-br100"
  },
  {
    "comment": "Entreprise très sérieuse, à l'écoute de ses clients, les conseils sont judicieux et avisés. Je recommande vivement cette entreprise qui a travaillé avec rapidité et efficacité et à repondu à mes attentes. Merci à Valentin et son équipe.",
    "fullName": "Jennifer A",
    "position": "Utilisatrice",
    "imageUrl": "https://lh3.googleusercontent.com/a-/ALV-UjW9WNbPD2Lx3p37MPx68ojE_5SH-1wyAAduPjctppxiqAXiyiI=s120-c-rp-mo-br100"
  },
  {
    "comment": "Installation d'un poêle à granulé lundi 27 décembre. Équipe au top, travail propre et soigné. Je recommande vivement cette entreprise.",
    "fullName": "Jonathan Schaubroeck",
    "position": "Utilisateur",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocKO88QMeup2BgDALAOKzrREZOlk4xeXfa9ydCwyifmbvwQx4g=s120-c-rp-mo-br100"
  },
  {
    "comment": "Très satisfaite de l'installation de mon poêle MCZ, l'équipe est de très bon conseil et le travail bien fait. Je les recommande les yeux fermés !",
    "fullName": "Steph Valo",
    "position": "Utilisatrice",
    "imageUrl": "https://lh3.googleusercontent.com/a-/ALV-UjXw5mC04iL4-_CprxUAm1M7vNAIGl6qs9dCiwgvzOlBLYr6BJNa=s120-c-rp-mo-br100"
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