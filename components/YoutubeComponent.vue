<script setup lang="ts">

import YoutubeVideo from "@/components/YoutubeVideo.vue";
import { ref } from 'vue';
import { PlayIcon } from "@heroicons/vue/24/solid";

const isFirstYoutubeVideoOpen = ref(false);
const isSecondYoutubeVideoOpen = ref(false);

const openModal = (id: number) => {
  if (id === 1) {
    isFirstYoutubeVideoOpen.value = true;
  } else {
    isSecondYoutubeVideoOpen.value = true;
  }
};

</script>

<template>
  <div class="marge bg-gray-800 py-20 flex flex-col items-center justify-center gap-10">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <div class="flex-1 flex items-center justify-between border border-white rounded h-[400px] min-w-full md:w-[600px] p-20 overflow-hidden relative md:min-w-[560px]">
        <img src="https://api.granulespicard.fr/storage/files/67e40d60d8c44_1742998880.png" alt="stove" class="absolute top-0 left-0 w-full h-full object-cover" />
        <button @click="openModal(1)" class="relative h-20 w-20 rounded-full flex items-center justify-center group">
          <PlayIcon class="bg-primary p-5 rounded-full z-40 inline-block h-full w-full text-white group-hover:text-black group-hover:bg-white transition-colors duration-300 ease-in-out"/>
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-white bg-transparent transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:bg-white"></span>
        </button>
        <h2 class="text-3xl font-bold text-white absolute bottom-0 left-0 p-4">
          Découvrez les poêles à granulés MCZ
        </h2>
        <YoutubeVideo :isModalOpen="isFirstYoutubeVideoOpen" @close="isFirstYoutubeVideoOpen = false" url="https://www.youtube.com/embed/K4PiLkg09jg?si=3EdTXmZ6_TO3nk15" />
      </div>
      <div class="flex-1 flex items-center justify-between border border-white rounded h-[400px] min-w-full md:w-[600px] p-20 overflow-hidden relative md:min-w-[560px]">
        <img src="https://api.granulespicard.fr/storage/files/67e40d578209a_1742998871.png" alt="stove" class="absolute top-0 left-0 w-full h-full object-cover" />
        <button @click="openModal(2)" class="relative h-20 w-20 rounded-full flex items-center justify-center group">
          <PlayIcon class="bg-primary p-5 rounded-full z-40 inline-block h-full w-full text-white group-hover:text-black group-hover:bg-white transition-colors duration-300 ease-in-out"/>
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-white bg-transparent transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:bg-white"></span>
        </button>
        <h2 class="text-3xl font-bold text-white absolute bottom-0 left-0 p-4">
          Découvrez notre gamme de poêles à pellets Nobis
        </h2>
        <YoutubeVideo :isModalOpen="isSecondYoutubeVideoOpen" @close="isSecondYoutubeVideoOpen = false" url="https://www.youtube.com/embed/8LgRK4EWG28?si=U9DyqBo0vYN33JmW" />
      </div>
    </div>
  </div>
</template>
