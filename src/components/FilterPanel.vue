<script setup lang="ts">
import TheBadge from './TheBadge.vue';
import { useFilterStore } from '@/stores/filter';

const store = useFilterStore();
</script>

<template>
  <div class="sm:min-h-[32px]">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="scale-y-0 opacity-0"
      enter-to-class="opacity-100 scale-y-0"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 scale-y-0"
      leave-to-class="opacity-0 scale-y-0"
    >
      <div
        v-if="store.filter.length"
        class="-mt-9 flex items-center justify-between rounded-radii bg-white px-[18px] py-5 shadow-main sm:px-[38px]"
      >
        <div class="flex flex-wrap gap-x-[13px] gap-y-4">
          <TransitionGroup
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0 scale-x-0"
            enter-to-class="opacity-100 scale-x-0"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 scale-x-0"
            leave-to-class="opacity-0 scale-x-0"
          >
            <TheBadge
              v-for="category in store.filter"
              :key="category"
              :clearable="true"
              @delete-badge="store.removeFilter(category)"
            >
              <span class="pl-[9px] pr-[13px] pt-[2px]">{{ category }}</span>
            </TheBadge>
          </TransitionGroup>
        </div>
        <button
          class="px-2 text-[13.5px] font-bold -tracking-[0.5px] text-gr-800 transition-all hover:text-primary hover:underline sm:px-0"
          @click="store.clearFilter"
        >
          Clear
        </button>
      </div>
    </Transition>
  </div>
</template>
@/stores/filter
