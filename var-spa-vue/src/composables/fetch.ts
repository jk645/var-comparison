import { ref } from "vue";

// TODO: Should improve this to accept reactive state, see: https://vuejs.org/guide/reusability/composables.html#accepting-reactive-state
// E.g.: Might be needed in a vehicle details page component that uses a changing ID param from the URL to fetch a vehicle's details.
// When navigate between 2 vehicles, ID param in URL changes, still on same page component, but would need to fetch new data.
export function useFetch<T>(url: string) {
  const data = ref<T|null>(null);
  const error = ref<Error|null>(null);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response code: ${response.status} (${response.statusText})`);
      }
      return response.json();
    })
    .then(json => data.value = json)
    .catch(e => error.value = e);

  return {data, error};
}
