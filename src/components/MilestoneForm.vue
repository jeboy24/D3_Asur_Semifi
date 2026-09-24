<template>
  <div class="card">
    <h2>Add Milestone</h2>

    <form @submit.prevent="addMilestone">

      <label>Milestone Name</label>
      <input
        v-model="form.name"
        type="text"
        placeholder="Enter milestone name"
      />

      <label>Project Name</label>
      <input
        v-model="form.project"
        type="text"
        placeholder="Enter project name"
      />

      <label>Priority</label>
      <select v-model="form.priority">
        <option value="">Select priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label>Target Date</label>
      <input
        v-model="form.targetDate"
        type="date"
      />

      <p v-if="error" class="error">
        {{ error }}
      </p>

      <button type="submit">
        Add Milestone
      </button>

    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-milestone'])

const form = reactive({
  name: '',
  project: '',
  priority: '',
  targetDate: ''
})

const error = ref('')

function addMilestone() {
  error.value = ''

  if (
    !form.name ||
    !form.project ||
    !form.priority ||
    !form.targetDate
  ) {
    error.value = 'Please fill in all fields.'
    return
  }

  emit('add-milestone', {
    name: form.name,
    project: form.project,
    priority: form.priority,
    targetDate: form.targetDate
  })

  form.name = ''
  form.project = ''
  form.priority = ''
  form.targetDate = ''
}
</script>