<script setup lang="ts">
import { usePositions } from '@/stores/position/usePositions';
import { useFetchPositions } from '@/stores/position/useFetchPositions';
import JobPosition from '@/components/JobPosition.vue';

useFetchPositions();
const positions = usePositions();
</script>

<template>
  <div class="flex flex-col gap-12 overflow-hidden pb-20 pt-14 sm:gap-[22px] sm:pt-[39px]">
    <TransitionGroup
      enter-active-class="duration-[400ms] ease"
      enter-from-class="opacity-0 translate-x-0"
      enter-to-class="opacity-10 translate-x-0"
      leave-active-class="duration-[400ms] ease absolute"
      leave-from-class="opacity-10 translate-x-0"
      leave-to-class="opacity-0 -translate-x-0"
      move-class="duration-[400ms] ease"
    >
      <JobPosition v-for="position in positions" :key="position.id" :position="position" />
    </TransitionGroup>
  </div>
</template>
