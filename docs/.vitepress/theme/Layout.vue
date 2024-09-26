<script setup lang="ts">
import DefaultTheme from "vitepress/theme"
import {ref} from "vue"

let hitokoto=ref("loading...")

fetch("https://v1.hitokoto.cn").then(a=>a.json()).then((data)=>{
  hitokoto.value=
`${data.hitokoto}
\n\t${data.from} - ${data.from_who}
`
})
</script>
<template>
<DefaultTheme.Layout>
<template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
<template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
<template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
<template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
<template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
<template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
<template #sidebar-nav-before><slot name="sidebar-nav-before" /></template>
<template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
<template #page-top><slot name="page-top" /></template>
<template #page-bottom><slot name="page-bottom" /></template>
<template #not-found><slot name="not-found" /></template>
<template #home-hero-before><slot name="home-hero-before" /></template>
<template #home-hero-info-before><slot name="home-hero-info-before" /></template>
<template #home-hero-info><slot name="home-hero-info" /></template>
<template #home-hero-info-after>
<p>{{hitokoto}}</p>
<slot name="home-hero-info-after" /></template>
<template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
<template #home-hero-image><slot name="home-hero-image" /></template>
<template #home-hero-after><slot name="home-hero-after" /></template>
<template #home-features-before><slot name="home-features-before" /></template>
<template #home-features-after><slot name="home-features-after" /></template>
<template #doc-footer-before><slot name="doc-footer-before" /></template>
<template #doc-before><slot name="doc-before" /></template>
<template #doc-after><slot name="doc-after" /></template>
<template #doc-top><slot name="doc-top" /></template>
<template #doc-bottom><slot name="doc-bottom" /></template>
<template #aside-top><slot name="aside-top" /></template>
<template #aside-bottom><slot name="aside-bottom" /></template>
<template #aside-outline-before><slot name="aside-outline-before" /></template>
<template #aside-outline-after><slot name="aside-outline-after" /></template>
<template #aside-ads-before><slot name="aside-ads-before" /></template>
<template #aside-ads-after><slot name="aside-ads-after" /></template>
</DefaultTheme.Layout>
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
