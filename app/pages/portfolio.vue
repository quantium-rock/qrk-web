<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('portfolio.title') }}</h1>
          <p class="text-xl text-gray-300">{{ $t('portfolio.subtitle') }}</p>
        </div>
      </UContainer>
    </section>

    <section class="py-20">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-8">
          <UCard v-for="project in projects" :key="project.name">
            <template #header>
              <h3 class="text-2xl font-bold">{{ project.name }}</h3>
            </template>
            <p class="mb-4">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tech in project.tech" :key="tech" color="primary">{{ tech }}</UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('portfolio.title') })

const projects = [
  { name: 'Beenzer', desc: 'NFT Social Platform with DAO governance', tech: ['Solana', 'React Native', 'Node.js'] },
  { name: 'Z-Trading', desc: 'High-performance trading platform', tech: ['Python', 'FastAPI', 'React'] },
  { name: 'Solucky', desc: 'Solana-based dApp', tech: ['Rust', 'Anchor', 'Web3.js'] },
  { name: 'Nuxt UX', desc: 'Open-source UI component library', tech: ['Nuxt', 'Vue 3', 'TypeScript'] }
]
</script>
