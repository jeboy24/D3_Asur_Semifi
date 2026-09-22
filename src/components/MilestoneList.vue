<script setup>
import { useFormatDate } from '../composables/useFormatDate'

defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'complete',
  'delete'
])

const { formatDate } = useFormatDate()
</script>

<template>
  <article class="task">
    <h3>{{ milestone.title }}</h3>

    <p>
      <strong>Category:</strong>
      {{ milestone.category }}
    </p>

    <p>
      <strong>Priority:</strong>
      {{ milestone.priority }}
    </p>

    <p>
      <strong>Due Date:</strong>
      {{ formatDate(record.dueDate) }}
    </p>

    <p>
      <strong>Status:</strong>

      <span v-if="record.completed">
        Completed
      </span>

      <span v-else>
        Pending
      </span>
    </p>

    <button
      v-if="!task.completed"
      @click="emit('complete', record.id)"
    >
      Mark as Completed
    </button>

    <button
      @click="emit('delete', record.id)"
    >
      Delete
    </button>
  </article>
</template>