<template>
    <div v-if="sharedState">
        <TitleContent text="Senha de acesso" v-if="showTitle"/>

        <div class="group-content">
            <StyledInput :label="'Senha'" v-model="sharedState.password" :input-attrs="passwordAttributes"/>
        </div>
    </div>
</template>

<script setup>
import TitleContent from '../utils/TitleContent.vue';
import StyledInput from '../utils/StyledInput.vue';

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

const passwordAttributes = {
    type: 'password',
};
</script>