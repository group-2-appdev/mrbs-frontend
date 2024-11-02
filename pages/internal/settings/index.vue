<template>
      <div>
            <div
                  class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Settings</span>
                        </h1>
                  </div>
            </div>
            <div class="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                  <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                              <h1 class="text-base font-semibold text-gray-900">Settings</h1>
                              <p class="mt-2 text-sm text-gray-700">Setting configuration for the system.</p>
                        </div>
                  </div>
            </div>
            <div class="px-4 py-4 sm:px-6 lg:px-8">
                  <ul role="list" class="divide-y divide-gray-100">
                        <li v-for="setting in settings" :key="setting.email"
                              class="relative flex justify-between gap-x-6 py-5">
                              <div class="flex min-w-0 gap-x-4">
                                    <div class="min-w-0 flex-auto">
                                          <p class="text-sm/6 font-semibold text-gray-900 hover:text-red-900">
                                                <a :href="setting.href">
                                                      <span class="absolute inset-x-0 -top-px bottom-0" />
                                                      {{ setting.name }}
                                                </a>
                                          </p>
                                    </div>
                              </div>
                              <div class="flex shrink-0 items-center gap-x-4">
                                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                                          <p v-if="setting.lastSeen" class="mt-1 text-xs/5 text-gray-500 hover:text-red-900">
                                                Last updated on <time :datetime="setting.lastSeenDateTime">{{ setting.lastSeen
                                                      }}</time>
                                          </p>
                                          <div v-else class="mt-1 flex items-center gap-x-1.5">
                                                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                                      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                </div>
                                                <p class="text-xs/5 text-gray-500">Online</p>
                                          </div>
                                    </div>
                                    <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                              </div>
                        </li>
                  </ul>
            </div>
      </div>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

definePageMeta({
      layout: 'internal'
})

const settings = [
      {
            name: 'Working Timestamp',
            href: '/internal/settings/working-timestamp',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
            name: 'Chatbot',
            href: '/internal/settings/chatbot',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
      },
]
</script>