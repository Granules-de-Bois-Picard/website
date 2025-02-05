<script setup lang="ts">
  import { PhoneIcon, ArrowLongRightIcon } from '@heroicons/vue/16/solid';

  const links = [
    {
      title: 'Accueil',
      to: '/'
    },
    {
      title: 'À Propos',
      to: '/'
    },
    {
      title: 'Nos Produits',
      to: '/'
    },
    {
      title: 'Actualités',
      to: '/news'
    },
    {
      title: 'Contact',
      to: '/contact'
    },
    {
      title: 'FAQ',
      to: '/faq'
    },
    {
      title: 'Galerie',
      to: '/gallery'
    }
  ];
</script>

<template>
  <div class="bg-green">
    <div class="marge py-20 flex flex-wrap items-start justify-center gap-10">
      <div class="flex-1 flex flex-col items-start justify-center gap-8 text-white text-left min-w-full md:min-w-[300px]">
        <img src="@/assets/logo.png" alt="Logo Granulés de bois Picard" class="h-16 w-auto" />
        <p class="text-justify">Chez Granulés de bois Picard, nous vous proposons une large gamme de poêles à granulés, poêles à bois et poêles mixtes. Nous vous accompagnons dans le choix de votre poêle, son installation et son entretien.</p>
        <div class="flex gap-4">
          <PhoneIcon class="w-6 h-6 text-primary" />
          <p>03 22 09 83 55</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-start justify-start gap-4 text-white text-left min-w-full md:min-w-[300px]">
        <h1 class="text-2xl font-bold text-primary border-b border-gray-600 w-full text-left">
          Plan du site
        </h1>
        <div class="flex flex-col gap-4 w-full justify-start">
          <NuxtLink v-for="link in links" :to="link.to" class="text-white flex-1 hover:text-primary transition-all duration-300 ease-in-out flex items-center justify-start gap-4 whitespace-nowrap">
            <ArrowLongRightIcon class="w-6 h-6 text-primary" />
            <p>{{ link.title }}</p>
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-start justify-start gap-4 text-white text-left min-w-full md:min-w-[300px]">
        <h1 class="text-2xl font-bold text-primary border-b border-gray-600 w-full text-left">
          Contact
        </h1>
        <div class="flex flex-col gap-4 w-full">
          <p>Granulés de bois Picard</p>
          <p>29 Rue Jules Lardière</p>
          <p>80800 Corbie</p>
        </div>
      </div>
    </div>
    <footer class="w-full flex items-center py-5 justify-center text-white border-t border-gray-600 marge">
      <p class="text-center">
        © 2024 <a href="https://granulespicard.fr/" class="underline text-primary">Granulés de bois Picard</a> - Tous droits réservés
      </p>
    </footer>
  </div>
</template>

<style scoped>

</style>