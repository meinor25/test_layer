export const useCount = () => {
  const count = ref<number>(0);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
};
