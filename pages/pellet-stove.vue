<template>
  <Header />
  <TreeBanner title="Galerie">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="font-bold">/</p>
    <NuxtLink to="/gallery" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Galerie</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">Poêles à granulés</p>
  </TreeBanner>
  <div class="marge py-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white">
    <div v-for="group in imageGroups" :key="group.id" class="grid gap-4">
      <div v-for="image in group.images" :key="image.id">
        <img :src="image.url" :alt="'Image ' + image.id" class="h-auto max-w-full rounded-lg" />
      </div>
    </div>
  </div>
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imageGroups = ref([])

onMounted(() => {
  // Génère 12 images aléatoires
  const images = [
    { id: 1, url: `https://picsum.photos/600?random=1` },
    { id: 2, url: `https://picsum.photos/600?random=2` },
    { id: 3, url: `https://picsum.photos/600?random=3` },
    { id: 4, url: `https://picsum.photos/600?random=4` },
    { id: 5, url: `https://picsum.photos/600?random=5` },
    { id: 6, url: `https://picsum.photos/600?random=6` },
    { id: 7, url: `https://picsum.photos/600?random=7` },
    { id: 8, url: `https://picsum.photos/600?random=8` },
    { id: 9, url: `https://picsum.photos/600?random=9` },
    { id: 10, url: `https://picsum.photos/600?random=10` },
    { id: 11, url: `https://picsum.photos/600?random=11` },
    { id: 12, url: `https://picsum.photos/600?random=12` },
  ]

  // Regrouper les images par groupe
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.value.push({
      id: i / 3,
      images: images.slice(i, i + 3),
    })
  }
})

useHead({
  title: "Photos Poêles à granulés - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Découvrez notre galerie de poêles à granulés."
    }
  ]
});

</script>
