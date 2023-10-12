import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobStore = defineStore('jobs', () => {
    const jobs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    async function fetchJobs() {
try {
  const { data } = await axios.get('http://localhost:4000/api/jobs')
  jobs.value = data.data
  console.log("Data", jobs);

} catch (error) {
    
}            
    }

    return {
        jobs,
        isLoading,
        error,
        fetchJobs
    }
})