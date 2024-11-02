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
                              <span class="font-semibold text-gray-700">View Room</span>
                        </h1>
                  </div>
            </div>

            <div class="px-6 py-6">
                  <form class="space-y-8 w-full max-w-lg">
                        <div>
                              <h2 class="text-lg font-semibold text-gray-900">{{ form.name }}</h2>
                              <p class="text-sm text-gray-600">Room Information</p>
                        </div>

                        <div class="grid grid-cols-1 gap-y-6">

                              <div>
                                    <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                                    <span class="text-gray-600 text-md">{{ form.name }}</span>
                              </div>

                              <div>
                                    <label for="about"
                                          class="block text-sm/6 font-medium text-gray-900">Description</label>
                                    <div class="mt-2">
                                          <span class="text-gray-600 text-md">{{ form.description }}</span>

                                    </div>
                              </div>
                              <div>
                                    <label for="email" class="block text-sm font-medium text-gray-900">Total Pax</label>
                                    <span class="text-gray-600 text-md">{{ form.total_pax }}</span>

                              </div>

                              <div>
                                    <label for="role"
                                          class="block text-sm font-medium text-gray-900 mb-1">Equipment</label>
                                    <ul class="list-disc ml-5">
                                          <li v-for="equipment in form.equipments">
                                                <span class="text-gray-600 text-md">{{ equipment.name }}</span>
                                          </li>
                                    </ul>
                              </div>

                              <div>
                                    <label for="status" class="block text-sm font-medium text-gray-900">Status</label>
                                    <span :class="{
                                          'text-gray-700 ring-gray-600/20 bg-gray-50': form.status === 'Cancelled',
                                          'text-green-700 ring-green-600/20 bg-green-50': form.status === 'Available',
                                          'text-red-700 ring-red-600/20 bg-red-50': form.status === 'Not Available',
                                          'text-blue-700 ring-blue-600/20 bg-blue-50': form.status === 'On Use',

                                    }"
                                          class="inline-flex text-left items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                                          {{ form.status }}
                                    </span>

                              </div>
                              <div>
                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">
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
                        </div>
                  </form>
            </div>
            <div class="px-6 py-2">
                  <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">
                                          Total booking for today</label>
            </div>
            <div class="hidden sm:block">
                  <div class="inline-block min-w-full border-b border-gray-200 align-middle">
                        <table class="min-w-full">
                              <thead>
                                    <tr class="border-t border-gray-200">
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">
                                                <span class="lg:pl-2">Booking Period</span>
                                          </th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">Status</th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                                scope="col">Booked By</th>
                                          <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                                scope="col">Last updated</th>
                                    </tr>
                              </thead>
                              <tbody class="divide-y divide-gray-100 bg-white">
                                    <tr v-for="room in rooms" :key="room.id">
                                          <td class="px-6 py-3 text-sm font-medium text-gray-900">
                                                {{ room.from }} - {{ room.to }}
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
                                                <div class="flex items-center space-x-2">
                                                      <div class="flex items-center">
                                                            <!-- Image with spacing -->
                                                            <div v-if="!room.booked_by.imageUrl"
                                                                  class="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full">
                                                                  <span class="font-medium text-gray-600">{{
                                                                        Array.from(room.booked_by.name)[0] }}</span>
                                                            </div>
                                                            <div v-else>
                                                                  <img class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                                        :src="room.booked_by.imageUrl"
                                                                        :alt="room.booked_by.name" />
                                                            </div>
                                                            <!-- Spacing between image and text -->
                                                            <span class="ml-2">{{ room.booked_by.name }}</span>
                                                      </div>
                                                </div>
                                          </td>
                                          <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">{{
                                                room.lastUpdated }}</td>
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

const rooms = [
      {
            id: 1,
            title: 'Meeting Room 1',
            initials: 'MR 1',
            team: 'Sales',
            status: 'Active',
            from: '02:00 pm',
            to: '03:00 pm',
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
            from: '09:00 am',
            to: '10:00 am',
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
            from: '10:00 am',
            to: '12:00 am',
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
]
</script>