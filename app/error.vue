<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <UxCommonContainer>
      <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-200 dark:text-gray-800">404</h1>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <UButton label="Go Home" size="lg" to="/" />
      </div>
    </UxCommonContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '404 - Page Not Found' })
</script>
