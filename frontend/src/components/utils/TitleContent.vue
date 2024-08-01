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

<style scoped lang="scss">
.title-content {
    font-size: 36px;
    color: $dark-primary;
    font-weight: 700;
}
</style>