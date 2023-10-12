import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type Category } from '@/types/JobPosition';

export const useFilterStore = defineStore('filter-store', () => {
  const filter = ref<Category[]>([]);

  const addFilter = (category: Category) => {
    if (!filter.value.includes(category)) {
      filter.value.push(category);
    }
  };

  const removeFilter = (category: Category) => {
    filter.value = filter.value.filter((item) => item !== category);
  };

  const clearFilter = () => {
    filter.value = [];
  };

  return { filter, addFilter, removeFilter, clearFilter };
});
