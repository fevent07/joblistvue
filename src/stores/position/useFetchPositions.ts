// import { onMounted } from 'vue';
// import { usePositionStore } from './position-store';
// import data from '@/mock/data.json';
// import type { JobPosition } from '@/types/JobPosition';

// export const useFetchPositions = () => {
//   const { addPositions } = usePositionStore();

//   onMounted(() => {
//     addPositions(data as JobPosition[]);
//   });
// };

import { onMounted } from 'vue';
import { usePositionStore } from './position-store';
import axios from 'axios'; // Import Axios library
import type { JobPosition } from '@/types/JobPosition'; 

export const useFetchPositions = () => {
  const { addPositions } = usePositionStore();

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/jobs'); // Make a GET request to your API endpoint
      const data = response.data.data; // Extract the data from the response
console.log(data.data)
      addPositions(data as JobPosition[]); // Assuming the response is an array of JobPosition objects, pass it to the addPositions function
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  });
};


// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const usePositionStore = defineStore('position',{

//   state: () => ({
//     positions: [],
//   }),

//   actions: {
//     addPositions(positions) {
//       this.positions = positions;
//     },
//     async fetchPositions() {
//       try {
//         const response = await axios.get('http://localhost:4000/api/jobs/');
//         this.addPositions(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   },
// });
