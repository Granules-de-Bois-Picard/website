<script setup lang="ts">
import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  faq: {
    question: string;
    answer: string;
  }[];
}>();

</script>

<template>
  <div class="flex flex-col md:flex-row marge gap-10 py-20 bg-white items-start justify-center">
    <div class="flex-1 flex flex-col items-start justify-center gap-10">
      <h2 class="text-2xl font-bold">Vous avez une <span class="text-primary">question</span> ?</h2>
      <p class="text-gray-600 mt-4">Vous trouverez ici les réponses aux questions les plus fréquemment posées par nos clients. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.</p>
    </div>
    <div class="flex flex-col gap-4 w-full md:w-3/4 items-center justify-center md:items-start">
      <FaqQuestion v-for="(faq, index) in props.faq" :key="index" :question="faq.question" :answer="faq.answer" />
    </div>
  </div>
</template>

<style scoped>
</style>
