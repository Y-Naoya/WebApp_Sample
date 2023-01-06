<script setup lang="ts">
import{ init } from '../../composable/dataContext.js';
const { data, fetch } = init();
fetch();
</script>

<template>
  <slot :data="data" />
</template>
