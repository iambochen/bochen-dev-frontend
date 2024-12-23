<script setup>

</script>

<template>
    <footer class="flex items-center justify-between py-16">
        <div class="flex lg:flex-1">
            <ThemeToggler class="mx-2" />

            <NuxtLink class="p-4 rounded-md" href="https://github.com/iambochen" target="_blank" rel="noopener">
                <Icon name="mdi:github" class="w-6 h-6" />
            </NuxtLink>

            <NuxtLink class="p-4 rounded-md" href="https://linkedin.com/in/bochen-chen" target="_blank" rel="noopener">
                <Icon name="mdi:linkedin" class="w-6 h-6" />
            </NuxtLink>

            <NuxtLink class="p-4 rounded-md" href="mailto:chen@bochen.dev" target="_blank" rel="noopener">
                <Icon name="mdi:envelope" class="w-6 h-6" />
            </NuxtLink>
        </div>

        <div class="lg:flex lg:flex-1 lg:justify-end text-end">
            <h3>© 2024</h3>
        </div>
    </footer>
</template>
