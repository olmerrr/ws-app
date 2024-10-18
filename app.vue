<template>
  <div>
    <p class="bg-slate-400">Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();

const count = computed(() => counter.count);
const doubleCount = computed(() => counter.doubleCount);

const increment = () => counter.increment();
</script>
