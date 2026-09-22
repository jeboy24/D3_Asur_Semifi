<script setup>
import MilestoneItem from './MilestoneItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'complete',
  'delete'
])

function completeMilestone(id) {
  emit('complete', id)
}

function deleteMilestone(id) {
  emit('delete', id)
}
</script>

<template>
  <section>
    <h2>Milestone List</h2>

    <p v-if="tasks.length === 0">
      No tasks available.
    </p>

    <MilestoneItem
      v-for="milestone in milestone"
      :key="record.id"
      :task="task"
      @complete="completeMilestonek"
      @delete="deleteMilestone"
    />
  </section>
</template>