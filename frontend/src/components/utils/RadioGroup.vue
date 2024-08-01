<template>
  <div class="radio-group flex">
    <div v-for="option in options" :key="option.value" class="radio-option">
      <input type="radio" :id="option.value" :value="option.value" v-model="selectedValue" @change="handleChange" />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch} from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: (options) => {
      return options.every(option => option.value && option.label);
    }
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedValue = ref(props.modelValue);

const handleChange = () => {
  emit('update:modelValue', selectedValue.value);
};

watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue;
});
</script>

<style scoped lang="scss">
.radio-group {
  justify-content: space-between;
  gap: 16px;
}
</style>
