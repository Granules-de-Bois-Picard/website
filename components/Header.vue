<script setup lang="ts">

import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header class="absolute z-30 bg-opacity-50 bg-black h-16 md:h-28 w-full flex items-center justify-between marge">
    <NuxtLink to="/" class="text-white text-2xl">
      <img src="@/assets/logo.png" alt="logo" class="h-24 hidden lg:block" />
      <img src="@/assets/favicon.png" alt="logo" class="h-16 lg:hidden" />
    </NuxtLink>
    <Navigation />
  </header>
</template>

<style scoped>

</style>