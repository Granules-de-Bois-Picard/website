<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);
const contentHeight = ref('0px');
const contentRef = ref<HTMLElement | null>(null);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    contentHeight.value = `${contentRef.value?.scrollHeight}px`;
  } else {
    contentHeight.value = '0px';
  }
};

const updateHeight = () => {
  if (isOpen.value && contentRef.value) {
    contentHeight.value = `${contentRef.value.scrollHeight}px`;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight);
});
</script>

<template>
  <div class="bg-gray-100 p-6 rounded-lg transition-all duration-500 w-full select-none">
    <button class="flex items-center justify-between w-full focus:outline-none" @click="toggleAccordion">
      <h1 class="font-semibold text-lefttext-gray-700">{{ props.question }}</h1>
      <span class="text-gray-400 bg-gray-200 rounded-full transition-transform duration-300" :class="{ 'rotate-180': isOpen }">
        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </span>
    </button>

    <div
        ref="contentRef"
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :style="{ maxHeight: contentHeight }"
    >
      <div class="mt-6 text-gray-500 text-sm max-w-3xl">
        <p>{{ props.answer }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
button span {
  transition: transform 0.3s ease;
}
</style>