<script setup lang="ts">
import { RouterView } from "vue-router";
import { useTheme } from "./composables";

useTheme();
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.scss";
</style>
