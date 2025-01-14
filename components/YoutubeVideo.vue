<script setup lang="ts">
import { ref } from 'vue';
import { watch } from 'vue';
const isOpen = ref(false);

const props = defineProps<{
  isModalOpen: boolean;
  url: string;
}>();

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

watch(() => props.isModalOpen, (newValue) => {
  isOpen.value = newValue;
});

</script>

<template>
  <div v-if="isOpen" class="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="absolute w-full z-40 h-full bg-black opacity-60" @click="closeModal"></div>
    <iframe
        class=' h-[600px] w-full md:w-3/4 z-50'
        :src="props.url"
        width="100%"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
  </div>
</template>

<style scoped>

</style>