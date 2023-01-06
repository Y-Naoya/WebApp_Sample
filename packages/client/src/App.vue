<script setup lang="ts">
import { DataProvider } from './components/DataProvider/index.js';
</script>

<template>
  <div class="container">
    <DataProvider v-slot="{data}">
      <RouterView v-slot="{Component}">
        <component :is="Component" :data="data" />
      </RouterView>
    </DataProvider>
  </div>
</template>

<style scoped lang="postcss">
.container {
  max-inline-size: 30rem;
  margin-inline: auto;
  margin-block-start: 2rem;
}
</style>
