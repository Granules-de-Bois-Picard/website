<template>
  <Header />
  <TreeBanner title="FAQ">
    <NuxtLink to="/" class="text-white font-bold hover:text-primary transition-all duration-300 ease-in-out">Accueil</NuxtLink>
    <p class="text-primary font-bold">/</p>
    <p class="text-primary font-bold">FAQ</p>
  </TreeBanner>
  <Faq :faq="faq" />
  <Footer />
  <img src="~/assets/SLIDE_02.jpg" alt="slide" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />
</template>

<script setup lang="ts">
const faq = [
  {
    question: "Puis-je utiliser mon chèque énergie pour l'achat de pellets ?",
    answer: "Oui, vous pouvez utiliser votre chèque énergie pour l'achat de pellets. Le chèque énergie est une aide financière destinée à aider les ménages à faibles revenus à payer leurs factures d'énergie. Il peut être utilisé pour l'achat de pellets, qui sont le combustible utilisé par les poêles à granulés."
  },
  {
    question: "Quels sont les avantages des poêles à granulés ?",
    answer: "Les poêles à granulés sont une alternative écologique et économique aux poêles à bois traditionnels. Ils sont faciles à utiliser, efficaces et permettent de réaliser des économies d'énergie."
  },
  {
    question: "Comment entretenir un poêle à granulés ?",
    answer: "Pour entretenir un poêle à granulés, il est recommandé de nettoyer régulièrement le brûleur, le réservoir à granulés et le conduit d'évacuation des fumées. Il est également important de faire appel à un professionnel pour l'entretien annuel du poêle."
  },
  {
    question: "Quelle est la durée de vie d'un poêle à granulés ?",
    answer: "La durée de vie d'un poêle à granulés dépend de plusieurs facteurs, notamment de la qualité du poêle, de son entretien et de son utilisation. En général, un poêle à granulés peut durer entre 10 et 20 ans."
  },
  {
    question: "Quelle est la différence entre un poêle à granulés et un poêle à bois ?",
    answer: "La principale différence entre un poêle à granulés et un poêle à bois réside dans le combustible utilisé. Les poêles à granulés fonctionnent avec des granulés de bois, tandis que les poêles à bois fonctionnent avec des bûches de bois. Les poêles à granulés sont également plus faciles à utiliser et plus écologiques que les poêles à bois."
  }
]

useHead({
  title: "FAQ - Granulés de Bois Picard",
  meta: [
    {
      name: "description",
      content: "Retrouvez les réponses aux questions les plus fréquemment posées sur les poêles à granulés."
    }
  ]
});
</script>