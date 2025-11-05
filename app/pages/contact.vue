<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('contact.title') }}</h1>
          <p class="text-xl text-gray-300">{{ $t('contact.subtitle') }}</p>
        </div>
      </UContainer>
    </section>

    <section class="py-20">
      <UContainer>
        <div class="max-w-2xl mx-auto">
          <UCard>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <UFormGroup :label="$t('contact.form.name')">
                <UInput v-model="form.name" required />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.email')">
                <UInput v-model="form.email" type="email" required />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.company')">
                <UInput v-model="form.company" />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.message')">
                <UTextarea v-model="form.message" :rows="5" required />
              </UFormGroup>

              <UButton type="submit" size="lg" block :loading="loading">
                {{ $t('contact.form.submit') }}
              </UButton>
            </form>
          </UCard>

          <div class="mt-12 text-center">
            <p class="text-lg mb-4">Email: contact@quantium-rock.com</p>
            <p class="text-lg">Website: https://quantium-rock.com</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- AI Chat Widget Placeholder -->
    <!-- TODO: Integrate ElevenLabs AI voice agent for interactive voice welcome and page presentation -->
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: t('contact.title') })

const form = ref({ name: '', email: '', company: '', message: '' })
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // TODO: Implement email integration
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(t('contact.form.success'))
  form.value = { name: '', email: '', company: '', message: '' }
  loading.value = false
}
</script>
