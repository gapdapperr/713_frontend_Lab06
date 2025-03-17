<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountPlus, mdiAccount } from '@mdi/js'
import { mdiLogin, mdiLogout } from '@mdi/js'
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.logout()
  router.push({ name: 'login' })
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if (token && user) {
  authStore.reload(token, JSON.parse(user))
} else {
  authStore.logout()
}
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <nav class="flex">
        <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
          <li class="nav-item px-2">
            <router-link to="/register" class="nav-link">
              <div class="flex items-center">
                <SvgIcon type="mdi" :path="mdiAccountPlus" /> <span class="ml-3">Sign Up</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/login" class="nav-link">
              <div class="flex items-center">
                <SvgIcon type="mdi" :path="mdiLogin" /> <span class="ml-3">Login</span>
              </div>
            </router-link>
          </li>
        </ul>
        <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
          <li class="nav-item px-2">
            <router-link to="/profile" class="nav-link">
              <div class="flex items-center">
                <SvgIcon type="mdi" :path="mdiAccount" />
                <span class="ml-3">{{ authStore.currentUserName }}</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link hover:cursor-pointer" @click="logout">
              <div class="flex items-center">
                <SvgIcon type="mdi" :path="mdiLogout" /> <span class="ml-3"> LogOut</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
          <span v-if="authStore.isAdmin"> | <RouterLink to="/admin">Admin</RouterLink></span>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
}
</style>
