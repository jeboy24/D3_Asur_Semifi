import { ref, watch, onMounted } from 'vue'

 export function useMilestone() {
 	const milestones = ref([])

 	function addMilestone(milestone) {
     	milestones.value.push(milestone)
 	}

 	function removeMilestone(id) {
     	milestones.value = milestones.value.filter(
         	record => record.id !== id
     	)
 	}

    function markAsActive(id) {
        const milestones = milestones.value.find(record => record.id === id)
        if (milestones) {
			milestones.status = 'Active'
        }
    }
    
	onMounted(()=>{
		const savedRecords = localStorage.getItem('members')
		if(savedRecords){
			try{
				const parsed = JSON.parse(savedRecords)
				milestones.value = parsed.map(r => ({
					id: r.id ?? Date.now(),
					name: r.name ?? r.fullName ?? '',
					email: r.email ?? '',
					role: r.role ?? r.clubRole ?? '',
					joinDate: r.joinDate ?? r.join_date ?? '',
					status: r.status ?? (r.active ? 'Active' : 'Pending')
				}))
			} catch (e) {
				milestones.value = []
			}
		}
	})

    watch(milestones, (newMilestone) => {
        localStorage.setItem('members', JSON.stringify(newMembers))
    }, { deep: true })

 	return {
     	milestones,
     	addMilestone,
     	removeMilestone,
     	markAsActive
 	}
 }