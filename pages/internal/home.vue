<template>
  <div>
    <!-- Page title & actions -->
    <div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div class="min-w-0 flex-1">
        <h1 class="text-lg/6 font-medium text-gray-900 sm:truncate">Home</h1>
      </div>
    </div>
    <div class="mt-6 px-4 sm:px-6 lg:px-8">
      <h2 class="text-sm font-medium text-gray-900">Latest Room Booking</h2>
      <ul role="list" class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        <li v-for="room in pinnedRooms" :key="room.id" class="relative col-span-1 flex rounded-md shadow-sm">
          <div
            :class="[room.bgColorClass, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">
            {{ room.initials }}</div>
          <div
            class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a href="#" class="font-medium text-gray-900 hover:text-gray-600">{{ room.title }}</a>
              <p class="text-gray-500">{{ room.totalPax }} pax</p>
            </div>
            <Menu as="div" class="flex-shrink-0 pr-2">
              <MenuButton
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2">
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">View</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">Removed
                      from pinned</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </li>
      </ul>
    </div>

    <!-- Rooms list (only on smallest breakpoint) -->
    <div class="mt-10 sm:hidden">
      <div class="px-4 sm:px-6">
        <h2 class="text-sm font-medium text-gray-900">rooms</h2>
      </div>
      <ul role="list" class="mt-3 divide-y divide-gray-100 border-t border-gray-200">
        <li v-for="room in rooms" :key="room.id">
          <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
            <span class="flex items-center space-x-3 truncate">
              <span :class="[room.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />
              <span class="truncate text-sm/6 font-medium">
                {{ room.title }}
              </span>
            </span>
            <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>

    <!-- Projects table (small breakpoint and up) -->
    <div class="mt-8 hidden sm:block">
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
                scope="col">Booked By</th>
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
                  <div :class="[room.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />
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
                    'text-red-700 ring-red-600/20 bg-red-50': room.status === 'Inactive',
                    'text-green-700 ring-green-600/20 bg-green-50': room.status === 'Active',
                    'text-red-700 ring-red-600/20 bg-red-50': room.status === 'Cancelled',
                  }"
                    class="inline-flex text-left items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    {{ room.status }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-3 text-sm font-medium text-gray-500">
                <div class="flex items-center space-x-2">
                  <div class="flex items-center">
                    <!-- Image with spacing -->
                    <div v-if="!room.booked_by.imageUrl"
                      class="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full">
                      <span class="font-medium text-gray-600">{{
                        Array.from(room.booked_by.name)[0] }}</span>
                    </div>
                    <div v-else>
                      <img class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" :src="room.booked_by.imageUrl"
                        :alt="room.booked_by.name" />
                    </div>
                    <!-- Spacing between image and text -->
                    <span class="ml-2">{{ room.booked_by.name }}</span>
                  </div>
                </div>
              </td>
              <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">{{
                room.lastUpdated }}</td>
              <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell"><span
                  class="text-red-900">View</span></td>
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
      layout: 'internal'
})

const rooms = [
  {
    id: 1,
    title: 'Meeting Room 1',
    initials: 'MR 1',
    team: 'Sales',
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
    id: 2,
    title: 'Meeting Room 2',
    initials: 'MR 2',
    team: 'Engineering',
    status: 'Active',
    booked_by: {
      name: 'Mohammad Hafizzuddin',
      handle: 'hafizzuddin',
      imageUrl:
        '/images/employee/din.jpg',
    },
    totalPax: 10,
    lastUpdated: 'Nov 1, 2024',
    pinned: true,
    bgColorClass: 'bg-red-900',
  },
  {
    id: 3,
    title: 'Meeting Room 3',
    initials: 'MR 3',
    team: 'Engineering',
    status: 'Cancelled',
    booked_by: {
      name: 'Shamsuhaimi',
      handle: 'shamsuhaimi',
      imageUrl:
        '/images/employee/sham.jpg',
    },
    totalPax: 18,
    lastUpdated: 'Oct 30, 2024',
    pinned: false,
    bgColorClass: 'bg-green-900',
  },
  {
    id: 4,
    title: 'Meeting Room 4',
    initials: 'MR 4',
    team: 'Marketing',
    status: 'Active',
    booked_by: {
      name: 'Shamsuhaimi',
      handle: 'shamsuhaimi',
      imageUrl:
        '/images/employee/sham.jpg',
    },
    totalPax: 30,
    lastUpdated: 'Nov 1, 2024',
    pinned: true,
    bgColorClass: 'bg-green-900',
  },
  {
    id: 4,
    title: 'Meeting Room 6',
    initials: 'MR 6',
    team: 'Marketing',
    status: 'Active',
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
    status: 'Active',
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

const pinnedRooms = rooms.filter((project) => project.pinned)
</script>