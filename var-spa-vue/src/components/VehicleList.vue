<script setup lang="ts">
import { ref, watch } from "vue";
import { Vehicle } from "../interfaces/vehicle";
import VehicleListFilters from "./VehicleListFilters.vue";
import VehicleListItem from "./VehicleListItem.vue";

const props = defineProps<{
  vehicleList: Vehicle[];
}>();

const filterText = ref<string>("");
const unassignedOnly = ref<boolean>(false);
const vehicleListFiltered = ref<Vehicle[]>([]);

function handleFilterTextChanged(newValue: string) {
  filterText.value = newValue;
}
function handleUnassignedOnlyChanged(newValue: boolean) {
  unassignedOnly.value = newValue;
}
function filterVehicles() {
  vehicleListFiltered.value = props.vehicleList  // Start with the complete vehicle list passed via props
    .filter(v => v.driver.includes(filterText.value))  // Apply text filter
    .filter(v => unassignedOnly.value ? !v.driver : true);  // Apply "unassigned only" filter
}

filterVehicles();  // Run initially to populate "vehicleListFiltered"
watch([filterText, unassignedOnly], filterVehicles);  // Afterwards, watch for changes to filter values
</script>

<template>
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
</template>
