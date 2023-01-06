<script setup lang="ts">
import type { PropType } from 'vue';
import type { Data } from '../composable/dataContext.js';
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array as PropType<Data[]>,
    default: [],
    required: true,
  },
  id: {
    type: [Number],
    default: 0,
    required: true,
  },
});

const find = computed(() => props.data.find((v) => v.id === props.id));
</script>

<template>
  <div class="container">
    <template v-if="find">
      <div>ID: {{ find.id }}</div>
      <div>Name: {{ find.name }}</div>
    </template>
    <template v-else>
      Sorry. We find nothing.
    </template>
    <div class="link">
      <RouterLink :to="{ name: 'home' }">Back</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  flex-direction: column;

  & .link {
    display: flex;
    justify-content: end;
  }
}
</style>