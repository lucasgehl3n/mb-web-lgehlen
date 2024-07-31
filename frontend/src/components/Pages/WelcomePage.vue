<template>
  <div v-if="sharedState">
    <TitleContent text="Seja bem vindo(a)" v-if="showTitle" />
    <div class="group-content">
      <StyledInput :label="'Endereço de e-mail'" v-model="sharedState.email" />
    </div>

    <div class="group-content" v-if="showTypePerson">
      <RadioGroup v-model="sharedState.typePersonSelected" :options="radioOptions" />
    </div>
  </div>
</template>

<script setup>
import StyledInput from '../utils/StyledInput.vue';
import RadioGroup from '../utils/RadioGroup.vue';
import TitleContent from '../utils/TitleContent.vue';

const props = defineProps({
  showTitle: {
    type: Boolean,
    required: false,
    default: true,
  },
  sharedState: {
    type: Object,
    required: true,
  },
  showTypePerson: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const radioOptions = [
  { value: 'pf', label: 'Pessoa física' },
  { value: 'pj', label: 'Pessoa jurídica' },
];
</script>