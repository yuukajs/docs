<script setup lang="ts">
import {ref} from 'vue'
let hitokoto=ref("loading...")

fetch("https://v1.hitokoto.cn").then(a=>a.json()).then((data)=>{
  hitokoto.value=
  `${data.hitokoto}
  \n\t${data.from} - ${data.from_who}
  `
  })
</script>
<template>
<p>{{hitokoto}}</p>
</template>
<style scoped>
p {
  color:#333;
  margin-top:10px;
  font-family:"rubik";
  font-weight:lighter;
}
html.dark p{
  color:#eee
}
</style>
