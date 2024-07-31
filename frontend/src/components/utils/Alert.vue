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
        background-color: rgb(253 242 242/1);
        border-left: 8px solid rgb(248 180 180/1);
    }

    &-success {
        padding: 10px;
        width: 100%;
        background-color: rgb(243 250 247/1);
        border-left: 8px solid rgb(132 225 188/1);
    }
}
</style>