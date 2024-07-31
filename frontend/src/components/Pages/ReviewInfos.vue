<template>
    <div v-if="sharedState">
        <TitleContent text="Revise suas informações" />
        <div class="group-content">
            <WelcomePage :sharedState="sharedState" :show-title="false" :show-type-person="false"/>
        </div>

        <div class="group-content">
            <Person :sharedState="sharedState" :show-title="false"/>
        </div>

        <div class="group-content">
            <Password :sharedState="sharedState" :show-title="false"/>
        </div>
    </div>
</template>

<script setup>
import TitleContent from '../utils/TitleContent.vue';
import WelcomePage from './WelcomePage.vue';
import Person from './Person.vue';
import Password from './Password.vue';

const props = defineProps({
    sharedState: {
        type: Object,
        required: true,
    },
});
</script>