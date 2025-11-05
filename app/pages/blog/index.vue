<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('nav.blog') }}</h1>
          <p class="text-xl">Latest news and technical articles</p>
        </div>
      </UContainer>
    </section>

    <section class="py-20">
      <UContainer>
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p class="text-lg">Blog coming soon...</p>
          <p class="mt-4">Check back for technical articles, tutorials, and company news.</p>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('nav.blog') })
</script>
