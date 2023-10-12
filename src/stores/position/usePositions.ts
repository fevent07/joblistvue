import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { usePositionStore } from './position-store';
import { useFilterStore } from '../filter';

export const usePositions = () => {
  const { filter } = storeToRefs(useFilterStore());
  const { positions } = storeToRefs(usePositionStore());

  const visiblePositions = computed(() => {
    if (!filter.value.length) {
      return positions.value;
    }

    return positions.value.filter((pos) => {
      const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools];

      return filter.value.every((f) => posFilters.includes(f));
    });
  });

  return visiblePositions;
};
