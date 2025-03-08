
<script setup lang="ts">
import {ref} from 'vue'
import EventCard from '@/components/EventCard.vue'
const events = ref([
  {
    id: 1,
    category: 'Category 1',
    title: 'Event 1',
    description: 'Description of Event 1',
    date: '2022-01-01',
    time: '12:00',
    location: 'Location 1',
    petsAllowed: true,
    organizer: {
      name: 'Organizer 1',
    }
  },
  {
    id: 2,
    category: 'Category 2',
    title: 'Event 2',
    description: 'Description of Event 2',
    date: '2022-02-02',
    time: '13:00',
    location: 'Location 2',
    petsAllowed: false,
    organizer: {
      name: 'Organizer 2',
    }
  },
  {
    id: 3,
    category: 'Category 3',
    title: 'Event 3',
    description: 'Description of Event 3',
    date: '2022-03-03',
    time: '14:00',
    location: 'Location 3',
    petsAllowed: true,
    organizer: {
      name: 'Organizer 3',
    }
  }
])
</script>


<template>
  <div class="events">
<EventCard v-for="event in events" :key="event.id" :event="event" />
</div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
