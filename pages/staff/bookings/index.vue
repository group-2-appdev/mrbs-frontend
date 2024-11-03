<template>
      <div>
            <div class="min-h-full">
                  <div
                        class="sticky top-0 z-10 border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                        <div class="min-w-0 flex-1">
                              <h1 class="flex gap-x-3 text-base leading-7">
                                    <NuxtLink to="/staff/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                          Home</NuxtLink>
                                    <span class="text-gray-600">/</span>
                                    <span class="font-semibold text-gray-700">Bookings</span>
                              </h1>
                        </div>
                  </div>

                  <div class="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                        <div class="sm:flex sm:items-center">
                              <div class="sm:flex-auto">
                                    <h1 class="text-base font-semibold text-gray-900">Bookings</h1>
                                    <p class="mt-2 text-sm text-gray-700">A list of all the room in the system.</p>
                              </div>
                              <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <select id="country" name="country" autocomplete="country-name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>All Status</option>
                                          <option>Available</option>
                                          <option>Not Available</option>
                                    </select>
                              </div>
                        </div>

                  </div>
                  <div class="px-6 py-4 flex items-center justify-between bg-white">
                        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-5">
                              <li v-for="room in rooms" :key="room.name"
                                    class="col-span-1 divide-y divide-gray-300 rounded-lg bg-white shadow border border-gray-200">
                                    <div class="flex w-full items-center justify-between space-x-6 p-6">
                                          <div class="flex-1 truncate">
                                                <div class="flex items-center space-x-3">
                                                      <h3 class="truncate text-sm font-medium text-gray-900">{{
                                                            room.name }}</h3>
                                                </div>
                                                <div class="mt-2 flex items-center space-x-3">
                                                      <span :class="{
                                                            'bg-green-50 text-green-700 ring-green-600/20': room.status == 'Available',
                                                            'bg-red-50 text-red-700 ring-red-600/20': room.status == 'Not Available',
                                                      }"
                                                            class="inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset">{{
                                                                  room.status }}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div class="-mt-px flex divide-x divide-gray-200">
                                                <div class="flex w-0 flex-1">
                                                      <button type="button" @click="goTo"
                                                            :class="{ 'cursor-not-allowed text-gray-200': room.status == 'Not Available' }"
                                                            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                                            <BookOpenIcon
                                                                  :class="{ 'text-gray-100': room.status == 'Not Available' }"
                                                                  class="h-5 w-5 text-gray-300" aria-hidden="true" />
                                                            Book
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </li>
                        </ul>
                  </div>
            </div>
      </div>
</template>
<script setup>
import { BookOpenIcon } from '@heroicons/vue/20/solid'
definePageMeta({
      layout: 'staff'
})

const rooms = [
      {
            name: 'Meeting Room 1',
            status: 'Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
            name: 'Meeting Room 2',
            status: 'Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
            name: 'Meeting Room 3',
            status: 'Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
            name: 'Meeting Room 4',
            status: 'Not Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
            name: 'Meeting Room 5',
            status: 'Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
            name: 'Meeting Room 6',
            status: 'Available',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
]

const router = useRouter()
const goTo = () => {
      router.push('/staff/bookings/create')
}
</script>