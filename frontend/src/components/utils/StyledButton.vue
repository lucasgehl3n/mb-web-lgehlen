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

<style scoped>
.button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #ff9900;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-primary {
    background-color: #ff9900;
}

.button-primary:hover {
    background-color: #CC7A00;
}

.button-secondary {
    background-color: #fff;
    color: #ff9900;
    border: 1px solid #ff9900;
}

.button-secondary:hover {
    background-color: #ff9900;
    color: #fff;
    border: none;
}
</style>