<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add'])

const form = reactive({
  title: '',
  category: '',
  priority: 'Medium',
  dueDate: ''
})

const error = ref('')

function submitTask() {
  error.value = ''

  if (
    !form.title ||
    !form.category ||
    !form.dueDate
  ) {
    error.value = 'Please complete all required fields.'
    return
  }

  const newTask = {
    id: Date.now(),
    title: form.title,
    category: form.category,
    priority: form.priority,
    dueDate: form.dueDate,
    completed: false
  }

  emit('add', newTask)

  form.title = ''
  form.category = ''
  form.priority = 'Medium'
  form.dueDate = ''
}
</script>

<template>
  <form @submit.prevent="submitTask">
    <h2>Add Task</h2>

    <p v-if="error" class="error">
      {{ error }}
    </p>

    <div>
      <label>Task Title</label>
      <input
        v-model="form.title"
        type="text"
        placeholder="Enter task title"
      />
    </div>

    <div>
      <label>Category</label>
      <input
        v-model="form.category"
        type="text"
        placeholder="Enter category"
      />
    </div>

    <div>
      <label>Priority</label>

      <select v-model="form.priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

    <div>
      <label>Due Date</label>

      <input
        v-model="form.dueDate"
        type="date"
      />
    </div>

    <button type="submit">
      Add Task
    </button>
  </form>
</template>