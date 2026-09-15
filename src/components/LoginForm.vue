<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function login() {
  console.log(email.value, password.value)
  console.log(`Email: ${email.value}\nPassword: ${password.value}`)
}
</script>

<template>
  <div class="login">
    <h1>Login Form</h1>

    <form @submit.prevent="login">
      <input
        v-model="email"
        type="email"
        required
        placeholder="Email"
      />

      <input
        v-model="password"
        type="password"
        required
        minlength="6"
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>