<template>
      <div class="min-h-full">
            <div
                  class="sticky top-0 z-10 border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <NuxtLink to="/internal/rooms" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Rooms</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Edit Room</span>
                        </h1>
                  </div>
            </div>

            <div class="px-6 py-6">
                  <form class="space-y-8 w-full max-w-lg">
                        <div>
                              <h2 class="text-lg font-semibold text-gray-900">Edit room</h2>
                              <p class="text-sm text-gray-600">Room Information</p>
                        </div>

                        <div class="grid grid-cols-1 gap-y-6">

                              <div>
                                    <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                                    <input id="name" name="name" type="text" autocomplete="name" v-model="form.name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm" />
                              </div>

                              <div>
                                    <label for="about"
                                          class="block text-sm/6 font-medium text-gray-900">Description</label>
                                    <div class="mt-2">
                                          <textarea id="about" name="about" rows="5" v-model="form.description"
                                                class="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-relaxed">
                                          </textarea>
                                    </div>
                              </div>
                              <div>
                                    <label for="email" class="block text-sm font-medium text-gray-900">Total Pax</label>
                                    <select id="role" name="role" autocomplete="role-name" v-model="form.total_pax"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option>10</option>
                                          <option>20</option>
                                          <option>30</option>
                                          <option>40</option>
                                          <option>50</option>
                                          <option>More than 50</option>
                                    </select>
                              </div>

                              <div>
                                    <label for="role"
                                          class="block text-sm font-medium text-gray-900 mb-1">Equipment</label>

                                    <Listbox v-model="form.equipments" multiple>
                                          <div class="relative mt-1">
                                                <!-- Listbox Button Styling -->
                                                <ListboxButton
                                                      class="relative w-full cursor-pointer rounded-md bg-white border border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                                      {{ form.equipments.map((item) => item.name).join(', ') ||
                                                            'Select equipments' }}
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
                                                            <!-- Optional Check Icon for Selected Items -->
                                                            <span v-if="form.equipments.includes(item)"
                                                                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                      </ListboxOption>
                                                </ListboxOptions>
                                          </div>
                                    </Listbox>
                              </div>

                              <div>
                                    <label for="status" class="block text-sm font-medium text-gray-900">Status</label>
                                    <select id="status" name="status" autocomplete="status-name" v-model="form.status"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option>Available</option>
                                          <option>Not Available</option>
                                    </select>
                              </div>

                              <div>
                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Room
                                          photo</label>
                                    <div
                                          class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                          <div class="text-center">
                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div class="mt-4 flex text-sm/6 text-gray-600">
                                                      <label for="file-upload"
                                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-red-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-900 focus-within:ring-offset-2 hover:text-red-700">
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file"
                                                                  class="sr-only" />
                                                      </label>
                                                      <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Uploaded
                                          Room
                                          photo</label>
                                    <ul role="list"
                                          class="mt-2 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                          <li v-for="file in files" :key="file.source" class="relative">
                                                <div
                                                      class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                      <img :src="file.source" alt=""
                                                            class="pointer-events-none object-cover group-hover:opacity-75" />
                                                      <button type="button" class="absolute inset-0 focus:outline-none">
                                                            <span class="sr-only">View details for {{ file.title
                                                                  }}</span>
                                                      </button>
                                                </div>
                                                <p
                                                      class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                                      {{ file.title }}</p>
                                                <p class="pointer-events-none block text-sm font-medium text-gray-500">
                                                      {{ file.size }}</p>
                                          </li>
                                    </ul>
                              </div>

                              <div>
                                    <label for="project-name" class="block text-sm font-medium text-red-500">Danger
                                          Zone</label>

                                    <p class="mt-1 text-sm leading-6 text-red-600">This action cannot be undone. Please
                                          consider it first.</p>
                                    <button type="button"
                                          class="mt-5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                          Delete this room
                                    </button>
                              </div>
                        </div>

                        <div class="mt-6 flex justify-end gap-x-4">
                              <NuxtLink to="/internal/rooms"
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
      { id: 1, name: 'Projector' },
      { id: 2, name: 'Sound System' },
      { id: 3, name: 'Microphone' },
      { id: 5, name: 'Video Camera' },
      { id: 4, name: 'Meeting Desk' },
      { id: 5, name: 'Meeting Chair' },
]

let form = reactive({
      name: 'Meeting Room 1',
      total_pax: '30',
      description: 'A comfortable and well-equipped room for team meetings and client presentations. Ideal for brainstorming sessions, project discussions, and small group collaborations.',
      equipments: [items[0], items[1]],
      status: 'Available',
})

const files = [
      {
            title: 'room1.jpg',
            size: '244 KB',
            source:
                  '/images/rooms/room1.jpg',
      },
      {
            title: 'room2.jpg',
            size: '516 KB',
            source:
                  '/images/rooms/room2.avif',
      },
      {
            title: 'room3.jpg',
            size: '433 KB',
            source:
                  '/images/rooms/room3.webp',
      },
      {
            title: 'room4.jpg',
            size: '412 KB',
            source:
                  '/images/rooms/room4.jpg',
      },
]
</script>