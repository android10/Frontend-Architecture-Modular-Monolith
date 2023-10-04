<script setup lang="ts">
</script>

<template>
  <div class="description">
    <h3>
      This is the header
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.description h1,
.description h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .description h1,
  .description h3 {
    text-align: left;
  }
}
</style>
