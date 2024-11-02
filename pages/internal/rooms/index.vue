<template>
      <div>
            <div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Rooms</span>
                        </h1>
                  </div>
            </div>
            <div class="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                  <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                              <h1 class="text-base font-semibold text-gray-900">Rooms</h1>
                              <p class="mt-2 text-sm text-gray-700">A list of all the meeting rooms in the system.</p>
                        </div>
                        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                              <NuxtLink to="/internal/rooms/create"
                                    class="block rounded-md bg-red-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                                    room</NuxtLink>
                        </div>
                  </div>
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
                                          scope="col">Pax</th>
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                          scope="col">Booking Period</th>
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
                                                      'text-gray-700 ring-gray-600/20 bg-gray-50': room.status === 'Cancelled',
                                                      'text-green-700 ring-green-600/20 bg-green-50': room.status === 'Available',
                                                      'text-red-700 ring-red-600/20 bg-red-50': room.status === 'Not Available',
                                                      'text-blue-700 ring-blue-600/20 bg-blue-50': room.status === 'On Use',

                                                }" class="inline-flex text-left items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                                                      {{ room.status }}
                                                </span>
                                          </div>
                                    </td>
                                    <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                          {{ room.totalPax }}
                                    </td>
                                    <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                          {{ room.from }} - {{ room.to }}
                                    </td>
                                    <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                          <NuxtLink to="/internal/rooms/edit" class="text-red-900">
                                                Edit
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
</template>
<script setup>
definePageMeta({
      layout: 'internal'
})

const rooms = [
  {
    id: 1,
    title: 'Meeting Room 1',
    initials: 'MR 1',
    status: 'On Use',
    totalPax: 20,
    from: 'Nov 2, 2024 4:00 AM',
    to: 'Nov 2, 2024 5:00 AM',
    lastUpdated: 'Nov 2, 2024',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  {
    id: 2,
    title: 'Meeting Room 2',
    initials: 'MR 2',
    status: 'Available',
    totalPax: 10,
    lastUpdated: 'Nov 1, 2024',
    pinned: true,
    bgColorClass: 'bg-red-900',
  },
  {
    id: 3,
    title: 'Meeting Room 3',
    initials: 'MR 3',
    status: 'Cancelled',
    totalPax: 18,
    lastUpdated: 'Oct 30, 2024',
    pinned: false,
    bgColorClass: 'bg-green-900',
  },
  {
    id: 4,
    title: 'Meeting Room 4',
    initials: 'MR 4',
    status: 'Available',
    totalPax: 30,
    lastUpdated: 'Nov 1, 2024',
    pinned: true,
    bgColorClass: 'bg-green-900',
  },
  {
    id: 6,
    title: 'Meeting Room 5',
    initials: 'MR 5',
    team: 'Marketing',
    status: 'Not Available',
    totalPax: 30,
    lastUpdated: 'Nov 1, 2024',
    pinned: false,
    bgColorClass: 'bg-blue-900',
  },
  {
    id: 5,
    title: 'Meeting Room 6',
    initials: 'MR 6',
    team: 'Marketing',
    status: 'Available',
    totalPax: 30,
    lastUpdated: 'Nov 1, 2024',
    pinned: true,
    bgColorClass: 'bg-red-900',
  },
]
</script>