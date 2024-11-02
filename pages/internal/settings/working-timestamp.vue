<template>
      <div class="min-h-full">
            <div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <NuxtLink to="/internal/settings" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Settings</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Working Timestamp</span>
                        </h1>
                  </div>
            </div>

            <div class="px-6 py-6">
                  <form class="space-y-8 w-full max-w-lg">
                        <div>
                              <h2 class="text-lg font-semibold text-gray-900">Working Timestamp</h2>
                              <p class="text-sm text-gray-600">Configure working timestamp</p>
                        </div>

                        <div class="grid grid-cols-1 gap-y-6">
                              <div>
                                    <label for="role"
                                          class="block text-sm font-medium text-gray-900 mb-1">Working Days</label>

                                    <Listbox v-model="selectedItems" multiple>
                                          <div class="relative mt-1">
                                                <!-- Listbox Button Styling -->
                                                <ListboxButton
                                                      class="relative w-full cursor-pointer rounded-md bg-white border border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                                      {{ selectedItems.map((item) => item.name).join(', ') ||
                                                            'Select Working Days' }}
                                                      <span
                                                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <!-- Optional Icon -->
                                                            <svg class="h-5 w-5 text-gray-400"
                                                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                  fill="currentColor" aria-hidden="true">
                                                                  <path fill-rule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clip-rule="evenodd" />
                                                            </svg>
                                                      </span>
                                                </ListboxButton>

                                                <!-- Listbox Options Styling -->
                                                <ListboxOptions
                                                      class="absolute mt-1 w-full rounded-md bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10 overflow-auto">
                                                      <ListboxOption v-for="item in items" :key="item.id" :value="item"
                                                            class="cursor-pointer select-none relative py-2 pl-10 pr-4 text-gray-900 hover:bg-red-900 hover:text-white">
                                                            {{ item.name }}
                                                            <span v-if="selectedItems.includes(item)"
                                                                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                      </ListboxOption>
                                                </ListboxOptions>
                                          </div>
                                    </Listbox>
                              </div>

                              <div>
                                    <label for="role" class="block text-sm font-medium text-gray-900">Working Hour From</label>
                                    <select id="role" name="role" autocomplete="role-name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option v-for="from in froms" :value="from.value">{{ from.value }}</option>
                                    </select>
                              </div>

                              <div>
                                    <label for="status" class="block text-sm font-medium text-gray-900">Working Hour To</label>
                                    <select id="status" name="status" autocomplete="status-name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option v-for="from in froms" :value="from.value">{{ from.value }}</option>
                                    </select>
                              </div>
                        </div>

                        <div class="mt-6 flex justify-end gap-x-4">
                              <NuxtLink to="/internal/settings"
                                    class="inline-flex items-center justify-center text-sm font-semibold text-gray-700 px-4 py-2">
                                    Cancel
                              </NuxtLink>
                              <button type="submit"
                                    class="inline-flex items-center justify-center rounded-md bg-red-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-900">
                                    Save
                              </button>
                        </div>
                  </form>
            </div>
      </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

import {
      Listbox,
      ListboxButton,
      ListboxOptions,
      ListboxOption,
} from '@headlessui/vue'

definePageMeta({
      layout: 'internal'
})

const items = [
      { id: 1, name: 'Sunday' },
      { id: 2, name: 'Monday' },
      { id: 3, name: 'Tuesday' },
      { id: 5, name: 'Wednesday' },
      { id: 4, name: 'Thursday' },
      { id: 5, name: 'Friday' },
      { id: 5, name: 'Saturday' },
]

const froms = [
      { id: 1, value: '12:00 am' },
      { id: 1, value: '1:00 am' },
      { id: 1, value: '2:00 am' },
      { id: 1, value: '3:00 am' },
      { id: 1, value: '4:00 am' },
      { id: 1, value: '5:00 am' },
      { id: 1, value: '6:00 am' },
      { id: 1, value: '7:00 am' },
      { id: 1, value: '8:00 am' },
      { id: 1, value: '9:00 am' },
      { id: 1, value: '10:00 am' },
      { id: 1, value: '11:00 am' },
      { id: 1, value: '12:00 pm' },
      { id: 1, value: '1:00 pm' },
      { id: 1, value: '2:00 pm' },
      { id: 1, value: '3:00 pm' },
      { id: 1, value: '4:00 pm' },
      { id: 1, value: '5:00 pm' },
      { id: 1, value: '6:00 pm' },
      { id: 1, value: '7:00 pm' },
      { id: 1, value: '8:00 pm' },
      { id: 1, value: '9:00 pm' },
      { id: 1, value: '10:00 pm' },
      { id: 1, value: '11:00 pm' },
      { id: 1, value: '12:00 pm' },
]

const selectedItems = ref([])
</script>