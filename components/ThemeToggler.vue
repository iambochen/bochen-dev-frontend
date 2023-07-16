<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
    if (colorMode.value === 'light') {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
}
</script>

<template>
    <button class="text-lg font-semibold leading-6 px-2" @click="toggleColorMode">
        <Icon v-if="$colorMode.value == 'dark'" name="iconamoon:mode-dark-light" />
        <Icon v-else name="iconamoon:mode-light" />
    </button>
</template>