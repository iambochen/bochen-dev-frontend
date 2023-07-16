<script setup>
import { ref } from 'vue'

const now_year = ref(new Date().getFullYear())
</script>

<template>
    <footer class="flex items-center justify-between py-16 lg:px-48">
        <div class="flex lg:flex-1">
            <ThemeToggler class="mx-2" />
        </div>
        
        <div class="lg:flex lg:flex-1 lg:justify-end text-end">
            <h3>© {{ now_year }} Bo-Chen, Chen</h3>
        </div>
    </footer>
</template>
