<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img 
              src="/branding/logo-black.png"
              alt="Quantium Rock"
              class="h-10 w-auto dark:hidden"
            />
            <img 
              src="/branding/logo-white.jpg"
              alt="Quantium Rock"
              class="h-10 w-auto hidden dark:block"
            />
            <span class="hidden sm:block text-xl font-bold text-gray-900 dark:text-white">
              Quantium Rock
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="link in navigation"
              :key="link.to"
              :to="link.to"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {{ $t(link.label) }}
            </NuxtLink>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <UButton
              :icon="currentLocaleIcon"
              color="gray"
              variant="ghost"
              @click="toggleLocale"
            />
            
            <!-- Theme Toggle -->
            <UButton
              :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
              color="gray"
              variant="ghost"
              @click="toggleDark"
            />

            <!-- Mobile Menu Button -->
            <UButton
              icon="i-heroicons-bars-3"
              color="gray"
              variant="ghost"
              class="md:hidden"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </div>
        </nav>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="link in navigation"
              :key="link.to"
              :to="link.to"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ $t(link.label) }}
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300">
      <UContainer>
        <div class="py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="col-span-1 md:col-span-2">
              <img 
                src="/branding/logo-white.jpg"
                alt="Quantium Rock"
                class="h-12 w-auto mb-4"
              />
              <p class="text-sm text-gray-400 mb-4">
                Technology & Cloud Solutions
              </p>
              <div class="flex space-x-4">
                <UButton
                  icon="i-heroicons-envelope"
                  color="gray"
                  variant="ghost"
                  :to="`mailto:${contactEmail}`"
                />
                <UButton
                  icon="i-heroicons-globe-alt"
                  color="gray"
                  variant="ghost"
                  to="https://github.com/quantium-rock"
                  target="_blank"
                />
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="font-semibold text-white mb-4">{{ $t('footer.company') }}</h3>
              <ul class="space-y-2">
                <li v-for="link in navigation" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {{ $t(link.label) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Services -->
            <div>
              <h3 class="font-semibold text-white mb-4">{{ $t('footer.services') }}</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>Cloud Solutions</li>
                <li>Blockchain Development</li>
                <li>Mobile Apps</li>
                <li>AI Integration</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            {{ $t('footer.copyright') }}
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const mobileMenuOpen = ref(false)
const contactEmail = 'contact@quantium-rock.com'

const navigation = [
  { to: '/', label: 'nav.home' },
  { to: '/services', label: 'nav.services' },
  { to: '/technology', label: 'nav.technology' },
  { to: '/portfolio', label: 'nav.portfolio' },
  { to: '/team', label: 'nav.team' },
  { to: '/blog', label: 'nav.blog' },
  { to: '/contact', label: 'nav.contact' }
]

const currentLocaleIcon = computed(() => {
  const icons = {
    en: 'i-circle-flags-us',
    es: 'i-circle-flags-es',
    fr: 'i-circle-flags-fr'
  }
  return icons[locale.value as keyof typeof icons] || icons.en
})

const toggleDark = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const toggleLocale = () => {
  const availableLocales = locales.value.map(l => l.code)
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  locale.value = availableLocales[nextIndex]
}
</script>
