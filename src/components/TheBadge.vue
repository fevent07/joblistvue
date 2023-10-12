<script setup lang="ts">
const props = defineProps<{ clearable?: boolean }>();
const emits = defineEmits<{
  (e: 'delete-badge'): void;
}>();

const handleDelete = () => {
  emits('delete-badge');
};
</script>

<template>
  <div
    class="flex min-h-[32px] items-center overflow-hidden rounded-radii bg-gr-200 text-[13px] font-extrabold leading-[1] -tracking-[0.5px] text-primary transition-all"
  >
    <slot />
    <button
      v-if="props.clearable"
      class="h-full w-8 cursor-pointer bg-primary bg-icon-remove bg-center bg-no-repeat text-gr-100 transition-all hover:bg-gr-900"
      @click="handleDelete"
    >
      <span class="sr-only">delete</span>
    </button>
  </div>
</template>
