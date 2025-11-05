<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
      <UxCommonContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('team.title') }}</h1>
          <p class="text-xl">{{ $t('team.subtitle') }}</p>
        </div>
      </UxCommonContainer>
    </section>

    <section class="py-20">
      <UxCommonContainer>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our team consists of senior engineers, architects, and consultants with extensive experience in cloud architecture, blockchain development, full-stack web and mobile development, AI/ML engineering, and security.
          </p>
          <UButton label="Join Our Team" size="lg" to="/contact" />
        </div>
      </UxCommonContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('team.title') })
</script>
