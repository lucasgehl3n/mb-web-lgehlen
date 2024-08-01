<template>
    <button @click="handleClickAction" :class="buttonClass" class="button">
        {{ text }}
    </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    handleClickAction: {
        type: Function,
        default: () => { }
    },
    primary: {
        type: Boolean,
        default: true
    },
    secondary: {
        type: Boolean,
        default: false
    }
});

const buttonClass = computed(() => {
    if (props.primary) {
        return 'button button-primary';
    } else if (props.secondary) {
        return ' button button-secondary';
    }
    return '';
});
</script>

<style scoped lang="scss">
.button {
    padding: 10px 20px;
    font-size: 16px;
    color: $white-primary;
    background-color: $orange-primary;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-primary {
    background-color: $orange-primary;
}

.button-primary:hover {
    background-color: $orange-primary;
}

.button-secondary {
    background-color: $white-primary;
    color: $orange-primary;
    border: 1px solid $orange-primary;
}

.button-secondary:hover {
    background-color: $orange-primary;
    color: $white-primary;
    border: none;
}
</style>