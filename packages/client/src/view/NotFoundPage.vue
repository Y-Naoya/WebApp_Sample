<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="title center">
      404 Not found.
    </div>
    <div class="link center">
      <RouterLink :to="{ name: 'home'}">Home</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  flex-direction: column;

  & .center {
    display: flex;
    justify-content: center;

    &.title {
      font-size: 3rem;
    }

    &.link {
      margin-block-start: 1rem;
    }
  }
}
</style>