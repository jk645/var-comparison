<script setup lang="ts">
import LiveMap from "./components/LiveMap.vue";
</script>

<template>
  <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/vue.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
        Swift Asset Tracker
      </a>
    </div>
  </nav>
  <LiveMap />
</template>

<style scoped>
</style>
