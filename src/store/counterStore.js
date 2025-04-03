import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment, doubleCount };
});
