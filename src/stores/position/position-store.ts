import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type JobPosition } from '@/types/JobPosition';

export const usePositionStore = defineStore('position-store', () => {
  const positions = ref<JobPosition[]>([]);

  const addPositions = (items: JobPosition[]) => {
    positions.value = items;
  };

  return { positions, addPositions };
});
