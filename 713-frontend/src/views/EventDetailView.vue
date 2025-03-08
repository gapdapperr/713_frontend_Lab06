<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types'
import eventService from '@/services/EventService'
const event = ref<Event>()
const id = ref<number>(1)
eventService
  .getEvent(id.value)
  .then((response) => {
    event.value = response.data
  })
  .catch ((error) => {
    console.error('There was an error!', error)
  })
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description}}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
