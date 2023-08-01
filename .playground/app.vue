<script setup>
import useCount2 from "@/composables/shared/useCount2";

const { count } = useCount2;
</script>
<template>
  <div>
    <h1>
      {{ count }}
    </h1>
    <button @click="increment">+</button>
  </div>
</template>

<style lang="scss" scoped></style>
