<script setup lang="ts">
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<template>
    <div class="PageFooter">
        <div style="text-align: center; font-size:14px;">Copyleft &copy; 玟茵开源社区 2013 - {{ currentYear }}</div>
    </div>
</template>

