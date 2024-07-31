<template>
    <div class="stepper flex">
        <div class="stepper-indicators text-left">
            <span>Etapa
                <p class="current-step">{{ currentStep + 1 }}</p>
                de {{ totalSteps }}
            </span>
        </div>

        <div class="stepper-content">
            <div v-for="(step, i) in props.steps" :key="step.component">
                <div v-show="currentStep == i">
                    <component :is="step.component" v-bind="step.props" :ref="step.ref" />
                </div>
            </div>
        </div>

        <div class="stepper-controls">
            <StyledButton :text="'Voltar'" v-if="!isFirstStep" :handle-click-action="goToPreviousStep" :primary="false"
                :secondary="true" class="spaced-button">
            </StyledButton>

            <StyledButton v-if="!isFinalStep" :text="'Continuar'" :handle-click-action="goToNextStep"
                class="spaced-button">
            </StyledButton>

            <StyledButton v-if="isFinalStep" :text="'Confirmar'" :handle-click-action="handleConfirmAction"
                class="spaced-button">
            </StyledButton>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import StyledButton from './StyledButton.vue';
const isFinalStep = computed(() => currentStep.value === totalSteps.value - 1);
const isFirstStep = computed(() => currentStep.value === 0);

const props = defineProps({
    steps: {
        type: Array,
        required: true,
        validator: (steps) => steps.every(step => step.component && typeof step.component === 'object'),
    },
    handleConfirmAction: {
        type: Function,
        required: false,
        default: () => { },
    },
});

const currentStep = ref(0);
const totalSteps = computed(() => props.steps.length);
const emit = defineEmits(['new-error-message']);

const validateCurrentStepFields = () => {
    //Is true if there is no error on field validation
    const validation = props.steps[currentStep.value].handleStepChange();
    const messageError = validation.error;
    if(messageError){
        emit('new-error-message', validation.message);
        return false;
    }
    emit('new-error-message', '');
    return true;
}


const goToNextStep = () => {
    if (currentStep.value < totalSteps.value - 1) {
        if (validateCurrentStepFields()) {
            currentStep.value++;
        }
    }
};

const goToPreviousStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};
</script>

<style scoped lang="scss">
.stepper {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.stepper-controls {
    margin-top: 8px;

    .spaced-button {
        margin-right: 8px;

        &:last-child {
            margin-right: 0;
        }
    }
}

.current-step {
    display: inline;
    font-weight: bold;
    color: #ff9900;
}
</style>