<template>
  <div class="page">

    <h1>Project Milestone Tracker</h1>

    <p>
      Add and milestones.
    </p>

    <div class="stats">
      <div>
        <h3>Total</h3>
        <p>{{ total }}</p>
      </div>

      <div>
        <h3>Pending</h3>
        <p>{{ pending }}</p>
      </div>

      <div>
        <h3>Finished</h3>
        <p>{{ finished }}</p>
      </div>
    </div>

    <MilestoneForm
      @add-milestone="add"
    />

    <MilestoneList
      :milestones="milestones"
      @finish="finish"
      @delete="remove"
    />

  </div>
</template>

<script setup>
import MilestoneForm from '../components/MilestoneForm.vue'
import MilestoneList from '../components/MilestoneList.vue'

import { useMilestones } from '../composables/useMilestones'

const {
  milestones,
  addMilestone,
  finishMilestone,
  deleteMilestone,
  total,
  finished,
  pending
} = useMilestones()

function add(data) {
  addMilestone(data)
}

function finish(id) {
  finishMilestone(id)
}

function remove(id) {
  deleteMilestone(id)
}
</script>