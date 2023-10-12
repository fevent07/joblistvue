<script setup lang="ts">
import { type JobPosition } from '@/types/JobPosition';
import TheBadge from './TheBadge.vue';
import PositionMeta from './PositionMeta.vue';
import { useFilterStore } from '@/stores/filter';

const props = defineProps<{ position: JobPosition }>();
const { addFilter } = useFilterStore();

const badges = [
  props.position.role,
  props.position.level,
  ...(props.position.languages ?? []),
  ...(props.position.tools ?? []),
  // This ensures that the spread operator has an iterable object to work with and prevents the "not iterable" error.
];
</script>

<template>
  <div
    class="flex flex-col items-center gap-4 rounded-radii border-l-4 bg-white px-[19px] pb-[21px] pt-[19px] shadow-main sm:flex-row sm:justify-between sm:px-[34px] sm:pb-[31px]"
    :class="{
      'border-l-primary': position.isFeatured,
      'border-l-gr-100': !position.isFeatured,
    }"
  >
    <div
      class="relative mb-[17px] flex w-full shrink-0 gap-4 border-b border-b-gr-800 pb-[20px] pt-[14px] sm:mb-0 sm:w-auto sm:gap-6 sm:border-b-0 sm:pb-0"
    >
      <img
        class="absolute -top-[45px] aspect-square w-[50px] sm:static sm:w-[90px] sm:shrink-0"
        :src="position.logo"
        :alt="position.company"
      />
      <div class="flex flex-col">
        <div class="flex items-center gap-6 sm:gap-4">
          <h3 class="text-xs font-bold text-primary sm:text-sm">{{ position.company }}</h3>
          <div class="flex flex-wrap items-center gap-[6px]">
            <TheBadge v-if="position.isNew" class="min-h-[24px] rounded-full bg-primary !text-gr-100">
              <span class="pl-2 pr-[9px] pt-[3px] text-xs font-bold">NEW!</span>
            </TheBadge>
            <TheBadge
              v-if="position.isFeatured"
              class="min-h-[24px] rounded-full !bg-gr-900 !text-gr-100"
            >
              <span class="pl-2 pr-[9px] pt-[3px] text-xs font-bold">FEATURED</span>
            </TheBadge>
          </div>
        </div>
        <h2
          class="my-3 cursor-pointer text-xs font-bold tracking-[0.2px] transition-all hover:text-primary sm:my-[14px] sm:text-[17px]"
        >
          {{ position.position }}
        </h2>
        <div class="mt-[3px] flex flex-wrap gap-4 sm:gap-[26px]">
          <PositionMeta>{{ position.postedDate }}</PositionMeta>
          <PositionMeta>{{ position.contract }}</PositionMeta>
          <PositionMeta>{{ position.location }}</PositionMeta>
        </div>
      </div>
    </div>
    <div class="flex shrink flex-wrap gap-4 sm:pt-[14px]">
      <TheBadge
        v-for="badge in badges"
        :key="badge"
        class="cursor-pointer hover:bg-primary hover:text-gr-100"
        @click="addFilter(badge)"
      >
        <span class="pl-[9px] pr-[10px] pt-[2px] text-[13px]">{{ badge }}</span>
      </TheBadge>
    </div>
  </div>
</template>
