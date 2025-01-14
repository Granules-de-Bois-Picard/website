<script setup lang="ts">
const props = defineProps<{
  to: string;
  text: string;
}>();

</script>

<template>
    <NuxtLink :to="props.to" class="text-black flex items-center w-full gap-2 hover:bg-primary p-2 hover:text-white h-10 whitespace-nowrap select-none"
    >
      <p class="w-64 pl-4">
        {{ props.text }}
      </p>
    </NuxtLink>
</template>