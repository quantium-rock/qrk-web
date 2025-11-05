<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="text-center space-y-8 max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            {{ $t('home.hero.subtitle') }}
          </p>
          
          <div class="flex flex-wrap items-center justify-center gap-4">
            <UButton
              :label="$t('home.hero.cta_primary')"
              icon="i-heroicons-rocket-launch"
              size="lg"
              to="/contact"
              color="primary"
            />
            
            <UButton
              :label="$t('home.hero.cta_secondary')"
              icon="i-heroicons-arrow-right"
              size="lg"
              color="gray"
              variant="outline"
              to="/services"
            />
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">
                {{ stat.value }}
              </div>
              <div class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                {{ $t(stat.label) }}
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('services.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {{ $t('services.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="service in services"
            :key="service.key"
            class="hover:shadow-xl transition-shadow duration-300"
          >
            <template #header>
              <div class="flex items-center space-x-4">
                <div class="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <UIcon :name="service.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {{ $t(`services.${service.key}.title`) }}
                </h3>
              </div>
            </template>

            <p class="text-gray-600 dark:text-gray-400">
              {{ $t(`services.${service.key}.description`) }}
            </p>

            <template #footer>
              <UButton
                :label="$t('common.learn_more')"
                color="primary"
                variant="ghost"
                icon="i-heroicons-arrow-right"
                trailing
                to="/services"
              />
            </template>
          </UCard>
        </div>

        <div class="text-center mt-12">
          <UButton
            :label="$t('common.get_started')"
            size="lg"
            icon="i-heroicons-arrow-right"
            trailing
            to="/contact"
          />
        </div>
      </UContainer>
    </section>

    <!-- Technology Showcase -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('technology.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {{ $t('technology.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" class="text-center">
            <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <UIcon :name="tech.icon" class="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400 mb-4" />
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ tech.name }}</h4>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <UButton
            :label="$t('common.learn_more')"
            size="lg"
            color="gray"
            variant="outline"
            to="/technology"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO
useHead({
  title: t('home.hero.title'),
  meta: [
    { name: 'description', content: t('home.hero.subtitle') }
  ]
})

const stats = [
  { value: '5+', label: 'home.stats.years' },
  { value: '50+', label: 'home.stats.projects' },
  { value: '30+', label: 'home.stats.clients' },
  { value: '99.9%', label: 'home.stats.uptime' }
]

const services = [
  { key: 'cloud', icon: 'i-heroicons-cloud' },
  { key: 'blockchain', icon: 'i-heroicons-cube' },
  { key: 'mobile', icon: 'i-heroicons-device-phone-mobile' },
  { key: 'ai', icon: 'i-heroicons-cpu-chip' },
  { key: 'web', icon: 'i-heroicons-globe-alt' },
  { key: 'opensource', icon: 'i-heroicons-code-bracket' }
]

const technologies = [
  { name: 'AWS', icon: 'i-heroicons-cloud' },
  { name: 'Bitcoin', icon: 'i-heroicons-currency-dollar' },
  { name: 'Solana', icon: 'i-heroicons-bolt' },
  { name: 'React Native', icon: 'i-heroicons-device-phone-mobile' }
]
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
