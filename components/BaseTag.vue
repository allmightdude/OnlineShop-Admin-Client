<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.tag{
    display: inline-block;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    color: $color-primary-1;
    background-color: rgb(134, 219, 247);
    margin: 1rem 1rem 1rem 0;
    box-shadow: 0 .1rem .1rem rgba(#000 , .5);
}
</style>