<template>
    <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
    width: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid rgb(226, 226, 226);
    border-right-color: #ff9900;
    animation: l2 1.5s infinite linear;
}

@keyframes l2 {
    to {
        transform: rotate(1turn)
    }
}
</style>