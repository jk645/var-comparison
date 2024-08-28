<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";
import leaflet, { Map, Marker } from "leaflet";
import { Asset } from "../interfaces/asset";
import getAssets from "../helpers/get-assets";
import getISS from "../helpers/get-iss";
import { CONFIG } from "../config";

let map: Map;
let updateIssIntervalId: number;
let updateIssIntervalMs = CONFIG.updateIssIntervalMs;

onMounted(() => {
  map = leaflet.map("map").setView({
    lng: -73.990200,
    lat: 40.706547
  }, 14);

  leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
  }).addTo(map);
});

onUnmounted(() => {
  if (updateIssIntervalId) {
    clearInterval(updateIssIntervalId);
  }
});

const markerRefs: {[assetId: string]: Marker} = {};
const assetList: Ref<Asset[]> = ref([]);

const showAll = () => {
  // Init each to their opposite.
  let minLng = 180, maxLng = -180, minLat = 90, maxLat = -90;

  assetList.value.forEach((asset: Asset) => {
    // Figure out the bounds.
    minLng = Math.min(minLng, asset.location.lng);
    maxLng = Math.max(maxLng, asset.location.lng);
    minLat = Math.min(minLat, asset.location.lat);
    maxLat = Math.max(maxLat, asset.location.lat);
  });

  // Set view of map to encapsulate all assets.
  map.fitBounds([
    [minLat, minLng],
    [maxLat, maxLng]
  ]);

  // Close any open popups.
  map.closePopup();
}

const showOnMap = (asset: Asset) => {
  const markerOfAsset = markerRefs[asset.id];
  map.setView({
    lng: asset.location.lng,
    lat: asset.location.lat
  });
  markerOfAsset.openPopup();
};

getAssets()
  .then((result: Asset[]) => {
    assetList.value = result;

    result.forEach((asset: Asset) => {
      // Add marker to the map.
      const marker = leaflet.marker(asset.location).addTo(map);
      marker.bindPopup(`
        <div class="h5">Asset #${asset.id}</div>
        <dl>
          <dt>Location (latitude, longitude)</dt>
          <dd>${asset.location.lat}, ${asset.location.lng}</dd>
          <dt>Heading</dt>
          <dd>${asset.heading}</dd>
          <dt>Speed</dt>
          <dd>${asset.speed}</dd>
        </dl>
      `);
      markerRefs[asset.id] = marker;
    });

    showAll();
  });

  const callGetISS = (isInit?: boolean) => {
    getISS()
      .then((result: any) => {
        const issLng = result.iss_position.longitude;
        const issLat = result.iss_position.latitude;
        const issAsset = {id: "ISS", location: {lng: issLng, lat: issLat}, heading: 0, speed: 0};

        // Add to the asset list.
        if (!isInit) {
          assetList.value.shift();
        }
        assetList.value.unshift(issAsset);

        // Create custom icon.
        var issIcon = leaflet.divIcon({className: 'iss-icon'});

        // Remove marker if existing.
        const oldMarker = markerRefs[issAsset.id];
        if (oldMarker) {
          oldMarker.remove();
        }

        // Add new marker to the map.
        const marker = leaflet.marker(issAsset.location, {icon: issIcon}).addTo(map);
        marker.bindPopup(`
          <div class="h5">Asset #${issAsset.id}</div>
          <dl>
            <dt>Location (latitude, longitude)</dt>
            <dd>${issAsset.location.lat}, ${issAsset.location.lng}</dd>
            <dt>Heading</dt>
            <dd>Unknown</dd>
            <dt>Speed</dt>
            <dd>Very fast</dd>
          </dl>
        `);
        markerRefs[issAsset.id] = marker;

        showAll();
      });
  };

  callGetISS(true);  // Make initial call. Then call on interval.
  updateIssIntervalId = setInterval(() => {
    callGetISS();
  }, updateIssIntervalMs);
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6 order-md-2">
        <div id="map" class="map"></div>
      </div>
      <div class="col-md-6 order-md-1 mt-4 mt-md-0">
        <div class="asset-list">
          <div class="d-flex justify-content-between">
            <h1>All Assets</h1>
            <button type="button"
              class="btn btn-outline-dark"
              @click="showAll()">
              Show all
            </button>
          </div>
          <div class="card mt-2" v-for="asset in assetList">
            <div class="card-body">
              <h5 class="card-title">Asset #{{ asset.id }}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location (lat, long): {{asset.location.lat}}, {{asset.location.lng}}</li>
              <li class="list-group-item">Heading: {{ asset.heading }}</li>
              <li class="list-group-item">Speed: {{ asset.speed }}</li>
            </ul>
            <div class="card-body">
              <button type="button"
                class="btn btn-outline-dark"
                @click="showOnMap(asset)">
                Show on map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .map, .asset-list {
    height: calc(100vh - 90px);
    max-height: 400px;
  }
  .asset-list {
    overflow-y: auto;
  }
</style>
