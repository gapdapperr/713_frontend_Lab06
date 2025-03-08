
<script setup lang="ts">
import {ref} from 'vue'
import EventCard from '@/components/EventCard.vue'
const events = ref([
  { id: 1, name: 'Event 1' },
  { id: 2, name: 'Event 2' },
  { id: 3, name: 'Event 3' },
])
</script>


<template>
  <div>
<EventCard v-for="event in events" :key="event.id" />
</div>
</template>
