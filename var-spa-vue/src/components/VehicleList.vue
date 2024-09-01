<script setup lang="ts">
import { ref, watch } from "vue";
import { Vehicle } from "../interfaces/vehicle";
import { useFetch } from "../composables/fetch";
import VehicleListFilters from "./VehicleListFilters.vue";
import VehicleListItem from "./VehicleListItem.vue";

const filterText = ref<string>("");
const unassignedOnly = ref<boolean>(false);

function handleFilterTextChanged(newValue: string) {
  filterText.value = newValue;
}
function handleUnassignedOnlyChanged(newValue: boolean) {
  unassignedOnly.value = newValue;
}

const {data: vehicleList, error} = useFetch<Vehicle[]>("http://localhost:9000/assets");

const vehicleListFiltered = ref<Vehicle[]>([]);
watch([vehicleList, filterText, unassignedOnly], () => {
  if (!vehicleList.value) return;
  vehicleListFiltered.value = vehicleList.value
    .filter(v => v.driver.includes(filterText.value))  // Apply text filter
    .filter(v => unassignedOnly.value ? !v.driver : true);  // Apply "unassigned only" filter
});
</script>

<template>
  <div v-if="error">Unable to fetch vehicle list. Error message: "{{ error.message }}"</div>
  <div v-else-if="vehicleList">
    <VehicleListFilters
      :filter-text="filterText"
      :unassigned-only="unassignedOnly"
      @filter-text-changed="handleFilterTextChanged"
      @unassigned-only-changed="handleUnassignedOnlyChanged"
    />
    <ul>
      <li v-for="vehicle in vehicleListFiltered" :key="vehicle.id">
        <VehicleListItem :vehicle />
      </li>
    </ul>
  </div>
  <div v-else>Loading vehicle list...</div>
</template>
