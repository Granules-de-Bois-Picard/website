<script setup lang="ts">
import {ArrowLongRightIcon} from "@heroicons/vue/24/solid";
import { ShoppingBagIcon, PhoneIcon, PercentBadgeIcon, WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="marge flex flex-col items-center justify-center py-20">
    <h1 class="text-3xl font-semibold text-center md:max-w-6xl">
      Le souci du détail qui vous réchauffe. Nos poêles sont conçus avec soin pour apporter confort et chaleur à votre maison, tout en créant un espace agréable pour votre famille.
    </h1>
    <div class="flex flex-wrap justify-between items-center gap-16 md:gap-8 mt-20">
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <ShoppingBagIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Pellet Drive</h1>
        <p class="text-center">
          Venez récupérer vos pellets directement dans notre magasin pour un service rapide et efficace.
        </p>
        <NuxtLink to="/contact" class="text-primary font-semibold hover:underline">
          En savoir plus
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <PhoneIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Service client</h1>
        <p class="text-center">
          Notre service client est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.
        </p>
        <NuxtLink to="/contact" class="text-primary font-semibold hover:underline">
          En savoir plus
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <PercentBadgeIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Devis gratuit</h1>
        <p class="text-center">
          Obtenez un devis gratuit pour une solution de chauffage adaptée à vos besoins et à votre maison.
        </p>
        <NuxtLink to="/contact" class="text-primary font-semibold hover:underline">
          En savoir plus
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <WrenchScrewdriverIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Installation</h1>
        <p class="text-center">
          Installation rapide et professionnelle, pour que vous profitiez rapidement de la chaleur de votre nouveau poêle.
        </p>
        <NuxtLink to="/contact" class="text-primary font-semibold hover:underline">
          En savoir plus
          <ArrowLongRightIcon class="w-6 h-6 inline-block" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>