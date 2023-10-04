<script setup lang="ts">
const content = 'This is the footer'
</script>

<template>
  <div class="footer">
    <h3>
      <p>{{ content }}</p>
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

.footer h1,
.footer h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .footer h1,
  .footer h3 {
    text-align: left;
  }
}
</style>
