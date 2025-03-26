<template>
  <Header />
  <TreeBanner title="Contactez-nous">
      <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
      <p class="text-primary font-bold">/</p>
      <p class="text-primary font-bold">Contact</p>
  </TreeBanner>
  <div class="bg-white py-20 marge">
    <div class="flex flex-wrap justify-between items-center gap-16 md:gap-8">
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <MapPinIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Localisation</h1>
        <p class="text-center text-gray-600">
          29 Rue Jules Lardière,<br/> 80800 Corbie
        </p>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <PhoneIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Service client</h1>
        <p class="text-center text-gray-600">
          03 22 09 83 55
        </p>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <EnvelopeIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Email</h1>
        <p class="text-center text-gray-600">
          infos@granulespicard.fr
        </p>
      </div>
      <span class="hidden xl:block border-r border-gray-300 h-40"></span>
      <div class="flex-1 flex flex-col items-center justify-center gap-4 min-w-[235px] group">
        <ClockIcon class="w-16 h-16 text-primary transition-all group-hover:-translate-y-4" />
        <h1 class="text-2xl font-semibold">Horaires</h1>
        <p class="text-center text-gray-500 font-medium">
          Lundi - 14h à 18h<br/>
          Mardi à Vendredi - 9h à 12h et 14h à 18h<br/>
          Samedi - 9h à 12h30
        </p>
      </div>
    </div>
  </div>
  <GoogleMaps />
  <ContactForm />
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>
<script setup lang="ts">
import GoogleMaps from "~/components/GoogleMaps.vue";
import ContactForm from "~/components/ContactForm.vue";
import {PhoneIcon, ClockIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/vue/24/outline";

useHead({
  title: "Contact - Poêles à granulés Granulés de Bois Picard à Corbie",
  meta: [
    {
      name: "description",
      content: "Contactez notre équipe de spécialistes en poêles à granulés à Corbie. Adresse: 29 Rue Jules Lardière, 80800 Corbie. Téléphone: 03 22 09 83 55."
    },
    {
      name: "keywords",
      content: "contact poêle à granulés, Corbie, Picardie, devis poêle à granulés, installation chauffage écologique, service client poêle à bois"
    },
    {
      property: "og:title",
      content: "Contact - Poêles à granulés Granulés de Bois Picard à Corbie"
    },
    {
      property: "og:description",
      content: "Contactez notre équipe de spécialistes en poêles à granulés à Corbie. Adresse: 29 Rue Jules Lardière, 80800 Corbie. Téléphone: 03 22 09 83 55."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://granulespicard.fr/contact"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://granulespicard.fr/contact"
    }
  ]
});
</script>