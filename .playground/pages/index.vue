<script setup>
const { count, increment } = useCount();
const { setCoverage, selectedCoverage } = useCoberturas();

const coverage = {
  id: 1,
  nombre: "Test",
  explicacion: "Test",
  precio: 10,
  precio_2: 10,
  precio_3: 10,
  codigo: "10",
  nodexml: "3232",
  marca: "3232",
  aviso: "3232",
};
</script>
<template>
  <div>
    <h1>
      {{ count }}
    </h1>
    <h1></h1>
    <button @click="increment">+</button>
    <button @click="setCoverage(coverage)">Set coverage</button>
    <div>
      {{ selectedCoverage }}
    </div>
    <input type="text" v-model="count" />
    <NuxtLink to="/test">Test</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
