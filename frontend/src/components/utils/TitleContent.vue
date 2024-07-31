<template>
    <div class="title-content">
        {{ text }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.title-content {
    font-size: 36px;
    color: #333;
    font-weight: 700;
}
</style>