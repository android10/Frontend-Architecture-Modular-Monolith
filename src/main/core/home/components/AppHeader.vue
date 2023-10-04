<script setup lang="ts">
const title = 'Header Title'
const description = 'This is a description of what the app should do'
</script>

<template>
  <div class="description">
    <h3>
      <p>Title: {{ title }}</p>
      <p>Desciption: {{ description }}</p>
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
