<script setup lang="ts">
import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col md:flex-row marge gap-10 pb-20 mt-20 md:mt-0">
    <div class="flex-1 flex items-center justify-center">
      <img src="@/assets/stove.png" alt="slide" class="w-2/3 object-cover" />
    </div>
    <div class="flex flex-col gap-4 w-full md:w-1/2 items-center justify-center md:items-start">
      <h2 class="font-canveat text-4xl text-primary">
        Notre Best-Seller
      </h2>
      <h1 class="text-5xl font-bold text-center md:text-left">
        Poêle à granulés innovant et élégant
      </h1>
      <p class="text-xl text-center md:text-left">
        Ce poêle à granulés est le plus vendu de notre gamme. Il est à la fois performant, élégant et simple d'utilisation.
      </p>
      <div class="flex items-center justify-center md:justify-start gap-4 mt-10 flex-wrap">
        <NuxtLink
            to="/"
            class="text-white bg-primary px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
        >
          Découvrir
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
        <button class="border-gray-300 border-2 px-8 py-4 rounded-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out">
          <PhoneIcon class="w-6 h-6 text-gray-600" />
          03 22 09 83 55
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
