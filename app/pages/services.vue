<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <UxCommonContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('services.title') }}</h1>
          <p class="text-xl text-gray-300">{{ $t('services.subtitle') }}</p>
        </div>
      </UxCommonContainer>
    </section>

    <section class="py-20">
      <UxCommonContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard v-for="service in services" :key="service.key">
            <template #header>
              <div class="flex items-center space-x-3">
                <UIcon :name="service.icon" class="w-8 h-8 text-primary-600" />
                <h3 class="text-xl font-bold">{{ $t(`services.${service.key}.title`) }}</h3>
              </div>
            </template>
            <p>{{ $t(`services.${service.key}.description`) }}</p>
          </UCard>
        </div>
      </UxCommonContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('services.title') })

const services = [
  { key: 'cloud', icon: 'i-heroicons-cloud' },
  { key: 'blockchain', icon: 'i-heroicons-cube' },
  { key: 'mobile', icon: 'i-heroicons-device-phone-mobile' },
  { key: 'ai', icon: 'i-heroicons-cpu-chip' },
  { key: 'web', icon: 'i-heroicons-globe-alt' },
  { key: 'opensource', icon: 'i-heroicons-code-bracket' }
]
</script>
