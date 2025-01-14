<script setup lang="ts">

import {ArrowLongRightIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative py-20 marge flex flex-col items-center justify-center gap-10">
    <img src="@/assets/SLIDE_04.jpg" alt="Foire aux questions" class="absolute top-0 left-0 w-full h-full object-cover brightness-50" />
    <h1 class="relative text-4xl font-bold text-center text-white">
      Vous ne savez pas <span class="text-primary">comment choisir</span> votre poêle ?<br/><br/>
      Lisez notre FAQ !
    </h1>
    <NuxtLink
        to="/faq"
        class="relative text-white bg-primary px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
    >
      Lire la FAQ
      <ArrowLongRightIcon class="w-6 h-6 inline-block" />
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>