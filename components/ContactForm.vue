<template>
  <div class="w-full bg-white py-20 flex items-center justify-center text-gray-900">
    <form @submit.prevent="handleSubmit" class="w-full max-w-2xl bg-tertiary p-8 md:p-20 rounded-lg">
      <h1 class="text-4xl font-bold text-center mb-6 text-gray-800">Envoyez-nous un message</h1>
      <p class="text-center text-gray-700 mb-8">Vous avez une question ou une demande particulière ? Remplissez le formulaire ci-dessous pour nous contacter.</p>

      <div class="mb-6">
        <label for="fullname" class="block text-sm text-gray-700 mb-2">Nom complet</label>
        <input v-model="formData.fullname" type="text" id="fullname" placeholder="John Doe" class="block w-full placeholder-gray-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" required minlength="2" maxlength="50" />
      </div>

      <div class="mb-6">
        <label for="email" class="block text-sm text-gray-700 mb-2">Email</label>
        <input v-model="formData.email" type="email" id="email" placeholder="john.doe@example.com" class="block w-full placeholder-gray-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
      </div>

      <div class="mb-6">
        <label for="phone" class="block text-sm text-gray-700 mb-2">Numéro de téléphone</label>
        <input v-model="formData.phone" type="tel" id="phone" placeholder="06 12 34 56 78" class="block w-full placeholder-gray-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" required pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$" />
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm text-gray-700 mb-2">Message</label>
        <textarea v-model="formData.message" id="message" placeholder="Votre message..." class="block w-full placeholder-gray-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" required minlength="10" maxlength="500"></textarea>
      </div>

      <div class="mb-6">
        <div ref="recaptchaContainer"></div>
        <p v-if="recaptchaError" class="mt-2 text-red-600 text-sm">Veuillez valider le reCAPTCHA</p>
      </div>

      <button type="submit" :disabled="isLoading" class="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300">
        <span v-if="isLoading">Envoi...</span>
        <span v-else>Envoyer</span>
        <ArrowLongRightIcon class="w-6 h-6 inline-block ml-2" />
      </button>

      <p v-if="responseMessage" :class="responseClass" class="mt-4 text-center">{{ responseMessage }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import axios from "axios";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const recaptchaContainer = ref<HTMLElement | null>(null);
const recaptchaError = ref(false);
const recaptchaToken = ref('');
const isLoading = ref(false);
const responseMessage = ref('');
const responseClass = ref('');

const formData = ref({
  fullname: '',
  email: '',
  phone: '',
  message: ''
});

const loadRecaptcha = () => {
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.render(recaptchaContainer.value!, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token: string) => {
          recaptchaToken.value = token;
          recaptchaError.value = false;
        },
        'expired-callback': () => {
          recaptchaToken.value = '';
          recaptchaError.value = true;
        }
      });
    });
  };
};

const handleSubmit = async () => {
  if (!recaptchaToken.value) {
    recaptchaError.value = true;
    return;
  }

  isLoading.value = true;
  responseMessage.value = '';
  responseClass.value = '';

  let data = {
    from: formData.value.email,
    subject: 'Nouvelle demande de contact de ' + formData.value.fullname,
    full_name: formData.value.fullname,
    phone: formData.value.phone,
    body: formData.value.message
  }

  try {
    await axios.post(import.meta.env.VITE_API_URL + '/api/email/send', {
      ...data,
      recaptchaToken: recaptchaToken.value
    });
    responseMessage.value = 'Votre message a été envoyé avec succès.';
    responseClass.value = 'text-green-600';
  } catch (error) {
    responseMessage.value = 'Une erreur est survenue lors de l\'envoi de votre message.';
    responseClass.value = 'text-red-600';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadRecaptcha();
});
</script>