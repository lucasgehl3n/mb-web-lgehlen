<template>
    <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
    width: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid $white-secondary; 
    border-right-color: $orange-primary;
    animation: spin 1.5s infinite linear;
}

@keyframes spin {
    to {
        transform: rotate(1turn)
    }
}
</style>