<script setup lang="ts">
import { Vehicle } from '../interfaces/vehicle';
import { useRoute } from 'vue-router';
import { useFetch } from '../composables/fetch';

const route = useRoute();
const {data: vehicle, error} = useFetch<Vehicle>(`http://localhost:9000/assets/${route.params.id}`);
</script>

<template>
  <h1>Vehicle Details</h1>
  <p>ID: {{ $route.params.id }}</p>  <!-- TEMP -->
  <div v-if="error">Unable to fetch vehicle details. Error message: "{{ error.message }}"</div>
  <div v-else-if="vehicle">
    <dl>
      <dt>ID</dt>
      <dd>{{ vehicle.id }}</dd>
      <dt>Location</dt>
      <dd>Lat: {{ vehicle.location.lat }}, Long: {{ vehicle.location.lng }}</dd>
      <dt>Heading</dt>
      <dd>{{ vehicle.heading }}</dd>
      <dt>Speed</dt>
      <dd>{{ vehicle.speed }}</dd>
    </dl>
  </div>
  <div v-else>Loading vehicle details...</div>
</template>
