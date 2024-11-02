<template>
      <div class="min-h-full">
            <div
                  class="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <NuxtLink to="/internal/settings" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Settings</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Chatbot</span>
                        </h1>
                  </div>
            </div>

            <div class="px-6 py-6">
                  <form class="space-y-8 w-full max-w-lg">
                        <div>
                              <h2 class="text-lg font-semibold text-gray-900">Chatbot</h2>
                              <p class="text-sm text-gray-600">Configure chatbot</p>
                        </div>

                        <div class="grid grid-cols-1 gap-y-6">
                              <div>
                                    <fieldset>
                                          <label for="role" class="block text-sm font-medium text-gray-900 mb-1">Model</label>
                                          <RadioGroup v-model="selectedModels"
                                                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                                <RadioGroupOption as="template" v-for="model in models"
                                                      :key="model.id" :value="model"
                                                      :aria-label="model.title"
                                                      :aria-description="`${model.description} to ${model.title}`"
                                                      v-slot="{ active, checked }">
                                                      <div
                                                            :class="[active ? 'border-red-900 ring-2 ring-red-900' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
                                                            <span class="flex flex-1">
                                                                  <span class="flex flex-col">
                                                                        <span
                                                                              :class="{ 'text-red-900' : checked }"
                                                                              class="block text-sm font-medium text-gray-900">{{
                                                                              model.title }}</span>
                                                                        <span
                                                                              class="mt-1 flex items-center text-sm text-gray-500">{{
                                                                              model.description }}</span>
                                                                  </span>
                                                            </span>
                                                            <CheckCircleIcon
                                                                  :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-red-900']"
                                                                  aria-hidden="true" />
                                                            <span :class="[active ? 'border' : 'border-2', checked ? 'border-red-900' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                                                  aria-hidden="true" />
                                                      </div>
                                                </RadioGroupOption>
                                          </RadioGroup>
                                    </fieldset>
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
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'


definePageMeta({
      layout: 'internal'
})

const models = [
  { id: 1, title: 'GPT-3.5 Turbo', description: 'A fast, inexpensive model for simple tasks' },
  { id: 2, title: 'GPT-4 Turbo', description: 'The previous set of high-intelligence models'},
  { id: 3, title: 'GPT-4o', description: 'The latest high-intelligence flagship model for complex, multi-step tasks'},
]

const selectedModels = ref(models[0])
</script>