<script setup lang="ts">
import { Vehicle } from "../interfaces/vehicle";
import VehicleListItem from "./VehicleListItem.vue";
import { useFetch } from "../composables/fetch";

const {data: vehicleList, error} = useFetch<Vehicle[]>("http://localhost:9000/assets");
</script>

<template>
  <div v-if="error">Unable to fetch vehicle list. Error message: "{{ error.message }}"</div>
  <div v-else-if="vehicleList">
    <ul>
      <li v-for="vehicle in vehicleList" :key="vehicle.id">
        <VehicleListItem :vehicle />
      </li>
    </ul>
  </div>
  <div v-else>Loading vehicle list...</div>
</template>
