
<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import eventService from '@/services/EventService'
import { ref, computed, watchEffect } from 'vue'
import type { Event } from '@/types'
import { useRouter} from 'vue-router'
const router = useRouter()
const events = ref<Event[]>([])
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})
interface Props {
  page: number
}

const props = defineProps<Props>()
const page = computed(() => props.page)

watchEffect(() => {
  eventService.getEvents(page.value, 2).then((response) => {
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'network-error-view'})
  })
})

eventService.getEvents(page.value, 2).then((response) => {
  events.value = response.data
})
</script>


<template>
<h1>Events For Good</h1>
  <div class="events">
<EventCard v-for="event in events" :key="event.id" :event="event" />
<div class="pagination">
  <RouterLink id="page-prev" :to="{ name: 'event-list-view', query: { page: page - 1 }}" rel="prev" v-if="page != 1">Prev</RouterLink>
  <RouterLink id="page-next" :to="{ name: 'event-list-view', query: { page: page + 1 }}" rel="next" v-if="hasNextPage">Next</RouterLink>
</div>
</div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
