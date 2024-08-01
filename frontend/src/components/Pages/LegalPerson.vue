<template>
  <div v-if="sharedState">
    <TitleContent text="Pessoa Jurídica" v-if="showTitle" />

    <div class="group-content">
      <StyledInput :label="'Razão Social'" v-model="sharedState.legalPerson.name" />
    </div>

    <div class="group-content">
      <StyledInput :label="'CNPJ'" v-model="sharedState.legalPerson.document" :inputAttrs="cnpjAttributes" />
    </div>

    <div class="group-content">
      <StyledInput :label="'Data de abertura'" v-model="sharedState.legalPerson.dateBirth" :inputAttrs="dateAttributes"/>
    </div>

    <div class="group-content">
      <StyledInput :label="'Telefone'" v-model="sharedState.legalPerson.phone" :inputAttrs="phoneAttributes"
        v-phone-mask />
    </div>
  </div>
</template>

<script setup>
import StyledInput from '../utils/StyledInput.vue';
import TitleContent from '../utils/TitleContent.vue';
import phoneMask from '../../directives/phone-mask';
import cnpjMask from '../../directives/cnpj-mask';

const phoneAttributes = {
  'v-directive': phoneMask,
};

const cnpjAttributes = {
  'v-directive': cnpjMask,
};

const dateAttributes = {
    type: 'date',
};

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  sharedState: {
    type: Object,
    required: true,
  },
});
</script>