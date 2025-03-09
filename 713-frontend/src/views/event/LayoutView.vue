<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
const store = useEventStore();
const { event } = storeToRefs(store);
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'event-detail-view', params: { id: event.id }}">Details</router-link>
      <router-link :to="{ name: 'event-register-view', params: { id: event.id } }">Register</router-link>
      <router-link :to="{ name: 'event-edit-view', params: { id: event.id } }">Edit</router-link>
    </nav>
    <router-view :event="event"></router-view>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style></style>
