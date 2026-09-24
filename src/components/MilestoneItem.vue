<template>
  <div class="milestone">
    <div>
      <h3>{{ milestone.name }}</h3>

      <p>Project: {{ milestone.project }}</p>

      <p>Priority: {{ milestone.priority }}</p>

      <p>Target Date: {{ formatDate(milestone.targetDate) }}</p>

      <p>Status: {{ milestone.status }}</p>
    </div>

    <div>
      <button
        v-if="milestone.status === 'Pending'"
        @click="finish"
      >
        Mark as Finished
      </button>

      <button @click="remove">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDateFormatter } from '../composables/useDateFormatter'

const props = defineProps({
  milestone: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['finish', 'delete'])

const { formatDate } = useDateFormatter()

function finish() {
  emit('finish', props.milestone.id)
}

function remove() {
  emit('delete', props.milestone.id)
}
</script>