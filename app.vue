<script setup lang="ts">
useHead({
  title: 'Hi, I\'m Bo-Chen (Brandon) 👋',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>