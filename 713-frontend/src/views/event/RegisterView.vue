<script setup lang="ts">
import { toRefs } from 'vue'
import type { Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const props = defineProps<{
  event: Event
  id: string
}>()
const store = useMessageStore()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const register = () => {
  store.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view'})
}
</script>

<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>
