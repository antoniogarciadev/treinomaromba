<template>
    <!-- Botão -->
    <button @click="handleClick" class="w-full bg-(--primary) hover:bg-(--p-hover) text-balck font-bold py-3 rounded-lg transition">
        <span  v-if="loading">Carregando...</span>
        <span  v-else class="text-black">
            <slot />
        </span>
    </button>
</template>

<script setup lang="ts">
    type Props = {
        loading?: boolean
        onClick?: ()=> void
    }

    const props = defineProps<Props>();

    const handleClick = () => {
        if(props.loading) return
        props.onClick?.()
    }
</script>

<style scoped>

</style>