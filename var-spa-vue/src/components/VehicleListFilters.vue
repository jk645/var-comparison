<script setup lang="ts">
const props = defineProps<{
  filterText: string;
  unassignedOnly: boolean;
}>();

const emit = defineEmits<{
  filterTextChanged: [newValue: string];
  unassignedOnlyChanged: [newValue: boolean];
}>();

function handleFilterTextInput(e: any) {
  emit('filterTextChanged', e.target.value);
}
function handleUnassignedOnlyChange(e: any) {
  emit('unassignedOnlyChanged', e.target.checked);
}
</script>

<template>
  <form>
    <label>
      Driver
      <input
        type="text"
        :value="props.filterText"
        @input="handleFilterTextInput"
      />
    </label>
    <label>
      Unassigned
      <input
        type="checkbox"
        :checked="props.unassignedOnly"
        @change="handleUnassignedOnlyChange"
      />
    </label>
  </form>
</template>
