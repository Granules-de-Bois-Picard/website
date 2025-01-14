<script setup lang="ts">
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const props = defineProps<{
  to: string;
  text: string;
  dropdown?: boolean;
}>();

const isDropdown = ref(false);

const showDropdown = () => {
  isDropdown.value = true;
};

const hideDropdown = () => {
  isDropdown.value = false;
};
</script>

<template>
  <div class="relative"
        @mouseenter="showDropdown"
        @mouseleave="hideDropdown"
  >
    <NuxtLink
        :to="props.to"
        v-if="!props.dropdown"
        class="text-white text-sm flex items-center justify-center gap-2 hover:text-primary font-semibold capitalize"
    >
      {{ props.text }}
      <span v-if="props.dropdown">
        <ArrowLongRightIcon class="w-5 h-5 text-primary" />
      </span>
    </NuxtLink>

    <div
        v-if="props.dropdown"
        class="text-white text-sm flex items-center justify-center gap-2 hover:text-primary font-semibold capitalize"
    >
      {{ props.text }}
      <span>
        <ArrowLongRightIcon class="w-5 h-5 text-primary" />
      </span>
    </div>

    <transition name="fade-slide">
      <div
          v-if="isDropdown && props.dropdown"
          class="absolute left-0 top-3/4"
      >
        <div class="bg-white mt-6 p-2 h-auto flex flex-col items-center justify-center space-y-2">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 100ms ease-in-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
