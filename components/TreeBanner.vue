<script setup lang="ts">

const props = defineProps<{
  title: string;
}>();

</script>

<template>
  <div class="w-full h-[450px] marge bg-black bg-opacity-50 flex flex-col items-center justify-center text-white gap-10">
    <h1 class="text-6xl font-bold text-center">{{ props.title }}</h1>
    <div class="flex items-center justify-center gap-4 whitespace-nowrap flex-wrap">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>