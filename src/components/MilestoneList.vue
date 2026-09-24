
<template>
  <div class="card">
    <h2>Milestones</h2>

    <p v-if="milestones.length === 0">
      No milestones yet.
    </p>

    <MilestoneItem
      v-for="milestone in milestones"
      :key="milestone.id"
      :milestone="milestone"
      @finish="finish"
      @delete="remove"
    />
  </div>
</template>

<script setup>
import MilestoneItem from './MilestoneItem.vue'

defineProps({
  milestones: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['finish', 'delete'])

function finish(id) {
  emit('finish', id)
}

function remove(id) {
  emit('delete', id)
}
</script>