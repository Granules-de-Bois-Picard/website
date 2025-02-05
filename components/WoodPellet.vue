<script setup lang="ts">
import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col md:flex-row marge gap-10 pb-20 mt-20 py-20 bg-tertiary">
    <div class="flex flex-col gap-4 w-full md:w-1/2 items-center justify-center md:items-start">
      <h2 class="font-canveat text-4xl text-primary">
        Nos Pellets de Bois
      </h2>
      <h1 class="text-5xl font-bold text-center md:text-left">
        Matière organique pour un chauffage écologique
      </h1>
      <ul class="text-xl text-center md:text-left flex flex-col gap-8 mt-10">
        <li class="flex gap-4 text-left">
          <span class="font-semibold text-primary text-2xl">01.</span>
          <div class="flex-1 flex flex-col gap-2">
            <h2 class="font-semibold text-2xl">Qualité supérieure</h2>
            <p>
              Nos pellets de bois sont fabriqués à partir de sciure de bois compressée, sans ajout de produits chimiques.
            </p>
          </div>
        </li>
        <li class="flex gap-4 text-left">
          <span class="font-semibold text-primary text-2xl">02.</span>
          <div class="flex-1 flex flex-col gap-2">
            <h2 class="font-semibold text-2xl">Efficacité énergétique</h2>
            <p>
              Les pellets de bois sont une source d'énergie renouvelable et écologique, qui permet de chauffer votre maison de manière efficace.
            </p>
          </div>
        </li>
        <li class="flex gap-4 text-left">
          <span class="font-semibold text-primary text-2xl">03.</span>
          <div class="flex-1 flex flex-col gap-2">
            <h2 class="font-semibold text-2xl">Organique et écologique</h2>
            <p>
              Les pellets de bois sont une alternative écologique aux combustibles fossiles, qui permet de réduire votre empreinte carbone.
            </p>
          </div>
        </li>
      </ul>
      <NuxtLink
          to="/"
          class="text-white mt-10 bg-primary px-8 py-4 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all duration-300 ease-in-out border-2 border-primary hover:border-gray-800"
      >
        Découvrir
        <ArrowLongRightIcon class="w-6 h-6 inline-block" />
      </NuxtLink>
    </div>
    <div class="relative flex-1 flex items-center justify-center">
      <div class="relative w-2/3">
        <img src="https://gp-api.luwa.fr/storage/files/67a2b41f64690_1738716191.png" alt="slide" class="object-cover w-full" />
        <div class="absolute top-0 right-0 w-1/3 transform translate-x-1/3 min-w-[100px] min-h-[100px]">
          <img src="@/assets/stamp.png" alt="fire" class="h-auto object-cover animate-spin-slow" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
