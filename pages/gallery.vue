<template>
  <Header />
  <TreeBanner title="Galerie">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Galerie</p>
  </TreeBanner>
  <div class="marge py-20 flex flex-wrap justify-center gap-8 bg-white">
    <NuxtLink to="/pellet-stove" class="flex flex-col items-center gap-4 w-full sm:w-1/2 lg:w-1/3 min-w-[300px] max-w-[400px] cursor-pointer group">
      <img src="~/assets/SLIDE_01.jpg" alt="gallery" class="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
      <h2 class="text-2xl font-bold">Poêles à granulés</h2>
    </NuxtLink>
    <NuxtLink to="/pellet-stove" class="flex flex-col items-center gap-4 w-full sm:w-1/2 lg:w-1/3 min-w-[300px] max-w-[400px] cursor-pointer group">
      <img src="~/assets/SLIDE_02.jpg" alt="gallery" class="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
      <h2 class="text-2xl font-bold">Poêles à granulés</h2>
    </NuxtLink>
    <NuxtLink to="/pellet-stove" class="flex flex-col items-center gap-4 w-full sm:w-1/2 lg:w-1/3 min-w-[300px] max-w-[400px] cursor-pointer group">
      <img src="~/assets/SLIDE_03.jpg" alt="gallery" class="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
      <h2 class="text-2xl font-bold">Poêles à granulés</h2>
    </NuxtLink>
  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
useHead({
  title: "Galerie - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez notre galerie photo."
    }
  ]
});
</script>