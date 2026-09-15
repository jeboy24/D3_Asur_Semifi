<!-- <script setup>
import { ref } from 'vue'
import EventForm from './components/EventForm.vue'
import EventDisplay from './components/EventDisplay.vue'

const registration = ref(null)

function handleRegistration(data) {
  registration.value = data
}
</script>

<template>
  <div>
    <h1>College Event Registration</h1>

    <EventForm @registration-submitted="handleRegistration" />

    <EventDisplay :registration="registration" />
  </div>
</template> -->

<template>
  <nav>
  <RouterLink :to="{name: 'Home'}">Home</RouterLink>|
  <RouterLink :to="{name: 'About'}">About</RouterLink>|
  <RouterLink :to="{name: 'Registration'}">Register</RouterLink>
</nav>

  <br>
  <RouterView />
</template>