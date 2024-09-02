<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFetch } from '../composables/fetch';
import { Vehicle } from '../interfaces/vehicle';
import VehicleDetails from '../components/VehicleDetails.vue';

const route = useRoute();
const {data: vehicle, error} = useFetch<Vehicle>(`http://localhost:9000/assets/${route.params.id}`);
</script>

<template>
  <div>
    <h1>Vehicle Details</h1>
    <div v-if="error">Unable to fetch vehicle details. Error message: "{{ error.message }}"</div>
    <div v-else-if="vehicle">
      <VehicleDetails :vehicle />
    </div>
    <div v-else>Loading vehicle details...</div>
  </div>
</template>
