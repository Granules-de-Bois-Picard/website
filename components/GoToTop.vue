<script setup lang="ts">
import { ref } from 'vue';
import { ArrowUpIcon } from "@heroicons/vue/24/solid";
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';

const smoothScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const isVisible = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isVisible.value = window.scrollY > 100;
  };
  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <button
      class="fixed bottom-8 right-8 md:bottom-16 z-40 md:right-16 bg-primary text-white p-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-secondary"
      :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
      @click="smoothScroll"
  >
    <ArrowUpIcon class="w-8 h-8 md:w-10 md:h-10" />
  </button>
</template>

<style scoped>
button {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
