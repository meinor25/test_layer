import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/count";
import { useCoberturasStore } from "../stores/coberturas";

export const useCount = () => {
  const countStore = useCounterStore();
  const { count } = storeToRefs(countStore);

  const increment = () => {
    countStore.increment();
    console.log(countStore.count);
  };

  return {
    count,
    increment,
  };
};
