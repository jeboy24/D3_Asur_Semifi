import { ref, watch, onMounted } from 'vue'

export  function useMilestones() {
    const milestones = ref([])
    

    function addMilestone(milestone) {
        milestones.value.push(milestone)
    }


    function removeMilestone(id) {
        milestones.value = milestone.value.filter (
            record => record.id !==id
        )
    }

    if (record) {
        record.complete = true
    }
}

    onMounted() => {
        const savedMilestone = localStorage.getItem('milestone')
    }

    if (savedMilestone) {
        record.value = JSON.parse(savedMilestone)
    }
})

watch(milestone, (newMilestone) => {
    localStorage.setItem('milestone, JSON.stringify'(newMilestone)
)
},
{ deep: true }
)

return {
    milestones, addMilestone, removeMilestone
}
