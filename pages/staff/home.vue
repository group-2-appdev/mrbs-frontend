<template>
      <div>
            <!-- Page title & actions -->
            <div
                  class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <div class="min-w-0 flex-1">
                        <h1 class="text-lg/6 font-medium text-gray-900 sm:truncate">Home</h1>
                  </div>
            </div>
            <div>
                  <h2 class="text-md font-medium text-gray-900 px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-2 lg:px-8">My Statistic</h2>
                  <div class="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3">
                        <div v-for="(stat, statIdx) in stats" :key="stat.name"
                              :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'border-t border-gray-200 px-4 py-6 sm:px-6 lg:px-8']">
                              <p class="text-sm/6 font-medium text-gray-900">{{ stat.name }}</p>
                              <p class="mt-2 flex items-baseline gap-x-2">
                                    <span class="text-4xl font-semibold tracking-tight text-gray-900">{{ stat.value
                                          }}</span>
                                    <span v-if="stat.unit" class="text-sm text-gray-900">{{ stat.unit }}</span>
                              </p>
                        </div>
                  </div>
            </div>

            <!-- Rooms list (only on smallest breakpoint) -->
            <div class="sm:hidden">
                  <div>
                        <h2 class="text-md font-medium text-gray-900 px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-2 lg:px-8">My Bookings</h2>
                  </div>
                  <ul role="list" class="divide-y divide-gray-100 border-t border-gray-200">
                        <li v-for="room in rooms" :key="room.id">
                              <a href="#"
                                    class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                                    <span class="flex items-center space-x-3 truncate">
                                          <span :class="[room.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full']"
                                                aria-hidden="true" />
                                          <span class="truncate text-sm/6 font-medium">
                                                {{ room.title }}
                                          </span>
                                    </span>
                                    <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true" />
                              </a>
                        </li>
                  </ul>
            </div>

            <!-- Projects table (small breakpoint and up) -->
            <div class="hidden sm:block">
                  <div class="border-t border-gray-200">
                        <h2 class="text-md font-medium text-gray-900 px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-2 lg:px-8">My Bookings</h2>
                  </div>
                  <div class="inline-block min-w-full border-b border-gray-200 align-middle">
                        <table class="min-w-full">
                              <thead>
                                    <tr class="border-t border-gray-200">
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">
                                                <span class="lg:pl-2">Room</span>
                                          </th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">Status</th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">Booking Period</th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                                scope="col">Last updated</th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                                scope="col"></th>
                                    </tr>
                              </thead>
                              <tbody class="divide-y divide-gray-100 bg-white">
                                    <tr v-for="room in rooms" :key="room.id">
                                          <td class="px-6 py-3 text-sm font-medium text-gray-900">
                                                <div class="flex items-center space-x-3 lg:pl-2">
                                                      <div :class="[room.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full']"
                                                            aria-hidden="true" />
                                                      <a href="#" class="truncate hover:text-gray-600">
                                                            <span>
                                                                  {{ room.title }}
                                                            </span>
                                                      </a>
                                                </div>
                                          </td>
                                          <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                                <div class="flex text-left items-center space-x-2">
                                                      <span :class="{
                                                            'text-gray-700 ring-gray-600/20 bg-gray-50': room.status === 'Inactive',
                                                            'text-green-700 ring-green-600/20 bg-green-50': room.status === 'Active',
                                                            'text-red-700 ring-red-600/20 bg-red-50': room.status === 'Cancelled',
                                                      }" class="inline-flex text-left items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                                                            {{ room.status }}
                                                      </span>
                                                </div>
                                          </td>
                                          <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                                <span v-if="room.period?.from">
                                                      {{ room.period?.from ?? '-' }} - {{ room.period?.to ?? '-' }}
                                                </span>
                                                <span v-else>
                                                      -
                                                </span>
                                          </td>
                                          <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">{{
                                                room.lastUpdated }}</td>
                                          <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                                <NuxtLink to="/staff/rooms" class="text-red-900">
                                                      View
                                                </NuxtLink>
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                        <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                              aria-label="Pagination">
                              <div class="hidden sm:block">
                                    <p class="text-sm text-gray-700">
                                          Showing
                                          {{ ' ' }}
                                          <span class="font-medium">1</span>
                                          {{ ' ' }}
                                          to
                                          {{ ' ' }}
                                          <span class="font-medium">5</span>
                                          {{ ' ' }}
                                          of
                                          {{ ' ' }}
                                          <span class="font-medium">20</span>
                                          {{ ' ' }}
                                          results
                                    </p>
                              </div>
                              <div class="flex flex-1 justify-between sm:justify-end">
                                    <a href="#"
                                          class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</a>
                                    <a href="#"
                                          class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</a>
                              </div>
                        </nav>
                  </div>
            </div>
      </div>
</template>

<script setup>
import {
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
} from '@headlessui/vue'
import { ChevronRightIcon, EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

definePageMeta({
      layout: 'staff'
})

const rooms = [
      {
            id: 1,
            title: 'Meeting Room 1',
            initials: 'MR 1',
            team: 'Sales',
            period: {
                  from: '02:00 pm',
                  to: '04:00 pm'
            },
            status: 'Active',
            booked_by: {
                  name: 'Fatin Nur Syafiqah',
                  handle: 'fatin',
                  imageUrl:
                        '/images/employee/fatin.jpg',
            },
            totalPax: 20,
            lastUpdated: 'Nov 2, 2024',
            pinned: true,
            bgColorClass: 'bg-pink-600',
      },
      {
            id: 4,
            title: 'Meeting Room 6',
            initials: 'MR 6',
            team: 'Marketing',
            status: 'Active',
            period: {
                  from: '02:00 pm',
                  to: '04:00 pm'
            },
            booked_by: {
                  name: 'Akira Toriyama',
                  handle: 'akira_toriyama',
                  imageUrl: null,
            },
            totalPax: 30,
            lastUpdated: 'Nov 1, 2024',
            pinned: true,
            bgColorClass: 'bg-red-900',
      },
      {
            id: 5,
            title: 'Meeting Room 5',
            initials: 'MR 5',
            team: 'Marketing',
            status: 'Cancelled',
            period: {
            },
            booked_by: {
                  name: 'Khalid Jamlus',
                  handle: 'khalid_jamlus',
                  imageUrl: null,
            },
            totalPax: 30,
            lastUpdated: 'Nov 1, 2024',
            pinned: false,
            bgColorClass: 'bg-blue-900',
      },
]

const stats = [
      { name: 'Total Bookings', value: '104' },
      { name: 'Cancelled Booking', value: '5' },
      { name: 'Success Booking', value: '99' },
]
</script>