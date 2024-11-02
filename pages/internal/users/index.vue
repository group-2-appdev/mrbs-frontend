<template>
      <div>
            <div class="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Users</span>
                        </h1>
                  </div>
            </div>
            <div class="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                  <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                              <h1 class="text-base font-semibold text-gray-900">Users</h1>
                              <p class="mt-2 text-sm text-gray-700">A list of all the users in the system.</p>
                        </div>
                        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                              <NuxtLink to="/internal/users/create"
                                    class="block rounded-md bg-red-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                                    user</NuxtLink>
                        </div>
                  </div>
            </div>
            <div class="inline-block min-w-full border-b border-gray-200 align-middle">
                  <table class="min-w-full">
                        <thead>
                              <tr class="border-t border-gray-200">
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                          scope="col">
                                          <span class="lg:pl-2">Name</span>
                                    </th>
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                          scope="col">Status</th>
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                          scope="col">Role</th>
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                          scope="col"></th>
                              </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 bg-white">
                              <tr v-for="user in users" :key="user.id">
                                    <td class="px-6 py-3 text-sm font-medium text-gray-900">
                                          <div class="flex items-center space-x-2">
                                                <div class="flex items-center">
                                                      <div v-if="!user.image"
                                                            class="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full">
                                                            <span class="font-medium text-gray-600">{{
                                                                  Array.from(user.name)[0] }}</span>
                                                      </div>
                                                      <div v-else>
                                                            <img class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                                  :src="user.image" :alt="user.name" />
                                                      </div>
                                                      <!-- Spacing between image and text -->
                                                      <span class="ml-2">{{ user.name }}</span>
                                                </div>
                                          </div>
                                    </td>
                                    <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                          <div class="flex text-left items-center space-x-2">
                                                <span :class="{
                                                      'text-gray-700 ring-gray-600/20 bg-gray-50': user.status === 'Inactive',
                                                      'text-green-700 ring-green-600/20 bg-green-50': user.status === 'Active',
                                                      'text-red-700 ring-red-600/20 bg-red-50': user.status === 'Suspended',
                                                }" class="inline-flex text-left items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                                                      {{ user.status }}
                                                </span>
                                          </div>
                                    </td>
                                    <td class="px-6 py-3 text-sm font-medium text-gray-500">
                                          {{ user.role }}
                                    </td>
                                    <td class="px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                          <NuxtLink to="/internal/users/edit" class="text-red-900">
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

const users = [
      {
            id: 1,
            name: 'Roslan Saidi',
            status: 'Active',
            image: '/images/employee/roslan.jpg',
            role: 'Admin',
      },
      {
            id: 2,
            name: 'Fatin Nur Syafiqah',
            status: 'Active',
            image: '/images/employee/fatin.jpg',
            role: 'Admin',
      },
      {
            id: 3,
            name: 'Mohammad Hafizzuddin',
            status: 'Active',
            image: '/images/employee/din.jpg',
            role: 'Admin',
      },
      {
            id: 4,
            name: 'Shamsuhaimi',
            status: 'Active',
            image: '/images/employee/sham.jpg',
            role: 'Admin',
      },
      {
            id: 5,
            name: 'Akira Toriyama',
            status: 'Suspended',
            image: null,
            role: 'Staff',
      },
      {
            id: 6,
            name: 'Khalid Jamlus',
            status: 'Inactive',
            image: null,
            role: 'Staff',
      },
]
</script>