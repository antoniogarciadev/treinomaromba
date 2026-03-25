<template>
    <main>
        <HeaderTop/>
        <RouterView/>
        <FooterButton/>
    </main>
</template>

<script lang="ts" setup>
    import HeaderTop from './HeaderTop.vue';
    import FooterButton from './FooterButton.vue';
    import { RouterView } from 'vue-router';
</script>