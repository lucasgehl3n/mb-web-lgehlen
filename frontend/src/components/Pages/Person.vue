<template>
    <div v-if="sharedState">
        <LegalPerson v-if="sharedState.typePersonSelected === 'pj'" :sharedState="sharedState"
            :show-title="showTitle" />
        <PhysicalPerson v-if="sharedState.typePersonSelected === 'pf'" :sharedState="sharedState"
            :show-title="showTitle" />
    </div>
</template>

<script setup>
import LegalPerson from './LegalPerson.vue';
import PhysicalPerson from './PhysicalPerson.vue';

const props = defineProps({
    sharedState: {
        type: Object,
        required: true,
    },
    showTitle: {
        type: Boolean,
        default: true,
    },
});
</script>