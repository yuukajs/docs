<script setup lang="ts">
const props=defineProps<{
  src: string
  text: string
}>()
</script>
<template>
<div class="image">
<img :src="props.src" />
<p>{{ props.text }}</p>
</div>
</template>

<style scoped>
.image {
  text-align:center;
}
img {
 max-height:150px;
}
p {
  color:#555;
  font-size:10px;
  font-family:"monospaced"
}
</style>
