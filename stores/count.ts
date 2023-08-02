import { defineStore } from "pinia";

export const useCounterStore = defineStore("count", () => {
  const count = ref(5);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
});
