<!-- TimePicker.vue -->
<template>
      <VCalendarDatePicker
        v-model="internalTime"
        mode="time" 
        is24hr
        :input-props="{ placeholder: 'Select time', class: 'border rounded p-2 w-full' }"
        :popover="{ visibility: 'click' }"
      />
    </template>
    
    <script setup lang="ts">
    import { DatePicker as VCalendarDatePicker } from 'v-calendar'
    import 'v-calendar/dist/style.css'
    import { ref, computed, defineProps, defineEmits, watch } from 'vue'
    
    // Define props and emits for v-model support
    const props = defineProps({
      modelValue: {
        type: Date,
        default: () => new Date(), // Default to the current date/time
      },
    })
    
    const emit = defineEmits(['update:modelValue'])
    
    // Internal state for time selection
    const internalTime = ref(props.modelValue)
    
    // Watch for external changes to modelValue and update internalTime
    watch(
      () => props.modelValue,
      (newVal) => {
        internalTime.value = newVal
      }
    )
    
    // Emit changes to parent component when internalTime changes
    watch(internalTime, (newVal) => {
      emit('update:modelValue', newVal)
    })
    </script>