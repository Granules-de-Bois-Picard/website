<script setup lang="ts">
import { ref } from 'vue';
import NavigationButton from "@/components/NavigationButton.vue";
import NavigationItemButton from "@/components/NavigationItemButton.vue";
import { Bars3BottomRightIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const isMenuOpen = ref(false);
const collapse = ref(true);

const openMenu = () => {
  isMenuOpen.value = true;
};
</script>

<template>
  <nav class="hidden md:flex items-center justify-between select-none">
    <ul class="flex items-center gap-10">
      <li>
        <NavigationButton to="/" text="Accueil" />
      </li>
      <li>
        <NavigationButton to="/" text="À Propos" dropdown>
          <template #default>
            <NavigationItemButton to="/" text="Qui sommes-nous ?" />
            <NavigationItemButton to="/faq" text="FAQ" />
            <NavigationItemButton to="/gallery" text="Galerie" />
          </template>
        </NavigationButton>
      </li>
      <li>
        <NavigationButton to="/" text="Nos Produits" />
      </li>
      <li>
        <NavigationButton to="/news" text="Actualités" />
      </li>
      <li>
        <NavigationButton to="/contact" text="Contact" />
      </li>
    </ul>
  </nav>
  <button class="md:hidden text-white">
    <Bars3BottomRightIcon class="h-8" @click="openMenu" />
  </button>
  <Transition name="fade">
    <div v-if="isMenuOpen" class="md:hidden fixed h-full w-full top-0 left-0 bg-black bg-opacity-30" @click="isMenuOpen = false"></div>
  </Transition>
  <Transition name="slide-fade">
    <nav v-if="isMenuOpen" class="md:hidden fixed h-full right-0 top-0 w-2/3">
      <div class="h-full w-full bg-black bg-opacity-80 flex flex-col items-start justify-start gap-10 p-10">
        <NavigationButton to="/" text="Accueil" />
        <div class="w-full">
          <span class="flex text-white items-center gap-4 cursor-pointer text-sm justify-between hover:text-primary font-semibold capitalize group w-full" @click="collapse = !collapse">
            À Propos
            <ChevronDownIcon class="h-4 transition-transform duration-300" :class="{ 'rotate-180': !collapse }" />
          </span>
          <Transition
              name="collapse"
              @enter="el => el.style.height = el.scrollHeight + 'px'"
              @leave="el => el.style.height = '0'"
          >
            <div v-show="!collapse" class="overflow-hidden">
              <div class="flex flex-col items-start gap-4 pt-4 pl-8">
                <NavigationButton to="/" text="Qui sommes-nous ?" />
                <NavigationButton to="/faq" text="FAQ" />
                <NavigationButton to="/gallery" text="Galerie" />
              </div>
            </div>
          </Transition>
        </div>
        <NavigationButton to="/" text="Nos Produits" />
        <NavigationButton to="/news" text="Actualités" />
        <NavigationButton to="/contact" text="Contact" />
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
}
</style>