<script setup>
import { ref } from 'vue'

const Pname = ref('')
const studentId = ref('')
const email = ref('')
const event = ref('')
const attendance = ref('')
const confirmation = ref(false)
const purpose = ref('')

const emit = defineEmits(['registration-submitted'])

function submitForm() {
  const data = {
    participantName: Pname.value,
    studentId: studentId.value,
    email: email.value,
    event: event.value,
    attendance: attendance.value,
    confirmation: confirmation.value,
    purpose: purpose.value
  }

  emit('registration-submitted', data)
}
</script>

<template>
  <form @submit.prevent="submitForm">

    <label>Participant Name:</label>
    <input type="text" v-model="Pname" required>
    <br>
    <label>Student ID:</label>
    <input type="text" v-model="studentId" required>
    <br>
    <label>Email:</label>
    <input type="email" v-model="email" required>
    <br>
    <label>Event:</label>
    <select v-model="event" required>
      <option value="">Select an Event</option>
      <option value="Intramurals">Intramurals</option>
      <option value="IT Week">IT Week</option>
      <option value="Technology Summit">Technology Summit</option>
      <option value="Student Leadership Seminar">Student Leadership Seminar</option>

    </select>

    <br><br>

    <label>Attendance:</label>
    <br>
    <input v-model="attendance" type="radio" value="On-site" required>
    On-site

    <input v-model="attendance" type="radio" value="Online">
    Online

    <br>

    <label>
      <input v-model="confirmation" type="checkbox" required>
      confirm participation
    </label>

    <br>

    <label>Purpose:</label>
    <br>
    <textarea v-model="purpose" required></textarea>

    <br>

    <button type="submit">Submit</button>

  </form>
</template>