<template>
    <div>
        <p>Count: {{ counterStore.count }}</p>
        <button @click="counterStore.increment">Increment</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counterStore';

const counterStore = useCounterStore();
</script>

<style scoped>

</style>
