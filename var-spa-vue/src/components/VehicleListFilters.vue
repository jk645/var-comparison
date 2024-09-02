<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  filterText: string;
  unassignedOnly: boolean;
}>();

const emit = defineEmits<{
  filterTextChanged: [newValue: string];
  unassignedOnlyChanged: [newValue: boolean];
}>();

const filterText = ref<string>(props.filterText);
watch(filterText, () => {
  emit('filterTextChanged', filterText.value);
});

const unassignedOnly = ref<boolean>(props.unassignedOnly);
watch(unassignedOnly, () => {
  emit('unassignedOnlyChanged', unassignedOnly.value);
});
</script>

<template>
  <form>
    <label>
      Driver
      <input
        type="text"
        v-model="filterText"
      />
    </label>
    <label>
      Unassigned
      <input
        type="checkbox"
        v-model="unassignedOnly"
      />
    </label>
  </form>
</template>
