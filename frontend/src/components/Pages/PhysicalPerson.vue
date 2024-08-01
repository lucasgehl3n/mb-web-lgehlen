<template>
  <div v-if="sharedState">
    <TitleContent text="Pessoa Física" v-if="showTitle" />

    <div class="group-content">
      <StyledInput :label="'Nome'" v-model="sharedState.physicalPerson.name" />
    </div>

    <div class="group-content">
      <StyledInput :label="'CPF'" v-model="sharedState.physicalPerson.document"
        :inputAttrs="cpfAttributes" />
    </div>

    <div class="group-content">
      <StyledInput :label="'Data de nascimento'" v-model="sharedState.physicalPerson.dateBirth" :inputAttrs="dateAttributes"/>
    </div>

    <div class="group-content">
      <StyledInput :label="'Telefone'" v-model="sharedState.physicalPerson.phone"
        :inputAttrs="phoneAttributes" />
    </div>
  </div>
</template>

<script setup>
import StyledInput from '../utils/StyledInput.vue';
import TitleContent from '../utils/TitleContent.vue';
import phoneMask from '../../directives/phone-mask';
import cpfMask from '../../directives/cpf-mask';

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

const phoneAttributes = {
  'v-directive': phoneMask,
};

const cpfAttributes = {
  'v-directive': cpfMask,
};

const dateAttributes = {
    type: 'date',
};
</script>