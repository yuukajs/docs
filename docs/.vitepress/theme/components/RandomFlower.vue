<script setup lang="ts">
const flowers = [
  "🌷",
  "🌸",
  "🌹",
  "🌺",
  "🌻",
  "🌼",
  "🏵️",
  "💐",
  "💮",
  "🥀",
  "⚜️",
  "🍀"
];
const flower = flowers[Math.floor(Math.random() * flowers.length)];
</script>
<template>
<div>
  <p>{{ flower }}</p>
</div>
</template>
<style scoped>
span {
  font-size:15em;
}
div {
  text-align:center;
}
</style>
