<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
      <UxCommonContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('technology.title') }}</h1>
          <p class="text-xl">{{ $t('technology.subtitle') }}</p>
        </div>
      </UxCommonContainer>
    </section>

    <section class="py-20">
      <UxCommonContainer>
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">{{ $t('technology.bitcoin') }}</h2>
            </template>
            <ul class="space-y-2">
              <li v-for="tech in bitcoinTech" :key="tech">• {{ tech }}</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">{{ $t('technology.solana') }}</h2>
            </template>
            <ul class="space-y-2">
              <li v-for="tech in solanaTech" :key="tech">• {{ tech }}</li>
            </ul>
          </UCard>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">{{ $t('technology.cloud') }}</h2>
            </template>
            <ul class="space-y-2">
              <li v-for="tech in cloudTech" :key="tech">• {{ tech }}</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-2xl font-bold">{{ $t('technology.mobile') }}</h2>
            </template>
            <ul class="space-y-2">
              <li v-for="tech in mobileTech" :key="tech">• {{ tech }}</li>
            </ul>
          </UCard>
        </div>
      </UxCommonContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('technology.title') })

const bitcoinTech = ['Stacks (Smart Contracts)', 'Lightning Network', 'Rootstock/RSK', 'Bitcoin Core', 'Ordinals & BRC-20']
const solanaTech = ['Anchor Framework', 'Solana Program Library', 'Metaplex', 'Serum DEX', 'Web3.js']
const cloudTech = ['AWS (EC2, Lambda, S3)', 'GCP (Compute, Storage)', 'Azure (VMs, Functions)', 'Docker & Kubernetes', 'Terraform']
const mobileTech = ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'Cross-platform']
</script>
