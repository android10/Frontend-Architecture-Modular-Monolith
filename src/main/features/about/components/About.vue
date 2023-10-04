<script setup lang="ts">
</script>

<template>
  <div class="text">
    <h3> 
      This is about <a href="https://fernandocejas.com" target="_blank" rel="noopener">Fernando</a>
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

.text h1,
.text h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .text h1,
  .text h3 {
    text-align: left;
  }
}
</style>
