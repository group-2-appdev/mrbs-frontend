<template>
  <div class="w-48">
    <VCalendarDatePicker
      v-model="internalDate"
      :show-calendar="true" 
      :min-date="today"
      :show-time="false"
      :input-props="{ placeholder: 'Select date', class: 'border rounded p-2 w-full' }"
      :popover="{ visibility: 'click' }"
    />
  </div>
</template>

<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import { ref, computed, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Date,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

// Today's date to set as minimum selectable date
const today = new Date()

// Internal state for date selection
const internalDate = ref(props.modelValue)

// Watch for internal changes and emit to parent component
watch(
  () => props.modelValue,
  (newValue) => {
    internalDate.value = newValue
  }
)

const formattedDate = computed(() => {
  if (!internalDate.value) return 'No date selected'
  return internalDate.value.toLocaleDateString() // Format as needed
})

// Emit the updated value back to the parent on change
watch(internalDate, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>