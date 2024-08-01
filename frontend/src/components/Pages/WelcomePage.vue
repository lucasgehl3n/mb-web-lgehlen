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
import personType from '../../helpers/enums/personType';

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  sharedState: {
    type: Object,
    required: true,
  },
  showTypePerson: {
    type: Boolean,
    default: true,
  },
});

const radioOptions = [
  { value: personType.PHYSICAL, label: 'Pessoa física' },
  { value: personType.LEGAL, label: 'Pessoa jurídica' },
];
</script>