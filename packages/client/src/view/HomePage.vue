<script setup lang="ts">
import type { PropType } from 'vue';
import type { Data } from '../composable/dataContext.js';
const props = defineProps({
  data: {
    type: Array as PropType<Data[]>,
    default: [],
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="grid">
      <div>ID</div>
      <div>Name</div>
      <template v-for="item in props.data" :key="item.id">
        <div>
          <RouterLink :to="{ name: 'sub', params: { id: item.id } }">{{ item.id }}</RouterLink>
        </div>
        <div>{{ item.name }}</div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  flex-direction: column;

  & .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-block-start: 1px solid black;
    border-inline-start: 1px solid black;

    & > * {
      border-block-end: 1px solid black;
      border-inline-end: 1px solid black;
      padding: 0.5rem;
    }
  }
}
</style>