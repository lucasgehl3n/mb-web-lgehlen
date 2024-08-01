<template>
    <div role="alert" :class="'alert-' + type">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    type: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.alert {
    &-error {
        padding: 10px;
        width: 100%;
        background-color: $white-secondary;
        border-left: 8px solid $red-secondary;
    }

    &-success {
        padding: 10px;
        width: 100%;
        background-color: $white-secondary;
        border-left: 8px solid $green-secondary;
    }

}
</style>