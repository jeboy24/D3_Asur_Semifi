<script setup>
defineProps({
  registration: Object
})
</script>

<template>
  <div v-if="registration">
    <br>
    <h2>Registration Information</h2>

    <p>PName: {{ registration.participantName }}</p>
    <p>Student ID: {{ registration.studentId }}</p>
    <p>Email: {{ registration.email }}</p>
    <p>Event: {{ registration.event }}</p>
    <p>Attendance: {{ registration.attendance }}</p>
    <p>Confirmation: {{ registration.confirmation }}</p>
    <p>Purpose: {{ registration.purpose }}</p>
  </div>
</template>