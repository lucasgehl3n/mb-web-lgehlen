<template>
    <div class="input-container">
        <label class="w-100 text-left" v-if="label">{{ label }}</label>
        <input class="w-100" ref="inputField" :value="modelValue" @input="updateValue($event.target.value)"
            :type="inputAttrs.type" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';
const inputField = ref(null);

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    handleInputAction: {
        type: Function,
        default: () => { }
    },
    modelValue: {
        type: String,
        default: ''
    },
    inputAttrs: {
        type: Object,
        required: false,
        default: () => ({
            type: 'text',
        })
    }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emit('update:modelValue', value);
    props.handleInputAction(value);
};


const applyVueDirectiveMask = () => {
    if (inputField.value && props.inputAttrs && props.inputAttrs['v-directive']) {
        const directive = props.inputAttrs['v-directive'];
        if (directive.beforeMount) {
            directive.beforeMount(inputField.value);
        }
    }
}

onMounted(() => {
    applyVueDirectiveMask();
})
</script>

<style scoped>
.input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
}

input {
    color: #333;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #333;
    background-color: #fff;
}
</style>
