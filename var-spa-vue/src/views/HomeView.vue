<script setup lang="ts">
import { useFetch } from '../composables/fetch';
import { Vehicle } from '../interfaces/vehicle';
import VehicleList from '../components/VehicleList.vue';

const {data: vehicleList, error} = useFetch<Vehicle[]>("http://localhost:9000/assets");
</script>

<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">Unable to fetch vehicle list. Error message: "{{ error.message }}"</div>
    <div v-else-if="vehicleList">
      <VehicleList :vehicle-list="vehicleList" />
    </div>
    <div v-else>Loading vehicle list...</div>
  </div>
</template>
