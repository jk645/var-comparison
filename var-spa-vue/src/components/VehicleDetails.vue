<script setup lang="ts">
import { Vehicle } from '../interfaces/vehicle';

const props = defineProps<{
  vehicle: Vehicle;
}>();
</script>

<template>
  <dl>
    <dt>ID</dt>
    <dd>{{ props.vehicle.id }}</dd>
    <dt>Driver</dt>
    <dd>{{ props.vehicle.driver }}</dd>
    <dt>Location</dt>
    <dd>Lat: {{ props.vehicle.location.lat }}, Long: {{ props.vehicle.location.lng }}</dd>
    <dt>Heading</dt>
    <dd>{{ props.vehicle.heading }}</dd>
    <dt>Speed</dt>
    <dd>{{ props.vehicle.speed }}</dd>
  </dl>
</template>
