<template>
      <div class="min-h-full">
            <div class="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                        <h1 class="flex gap-x-3 text-base leading-7">
                              <NuxtLink to="/internal/home" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Home</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <NuxtLink to="/internal/users" class="hover:text-n3c-900 font-semibold text-gray-700">
                                    Users</NuxtLink>
                              <span class="text-gray-600">/</span>
                              <span class="font-semibold text-gray-700">Create User</span>
                        </h1>
                  </div>
            </div>

            <div class="px-6 py-6">
                  <form class="space-y-8 w-full max-w-lg">
                        <div>
                              <h2 class="text-lg font-semibold text-gray-900">Create User</h2>
                              <p class="text-sm text-gray-600">Please fill in the blank</p>
                        </div>

                        <div class="grid grid-cols-1 gap-y-6">
                              <div>
                                    <label for="photo" class="block text-sm font-medium text-gray-900">Photo</label>
                                    <div class="mt-2 flex items-center gap-x-3">
                                          <UserCircleIcon class="h-20 w-20 text-gray-300" aria-hidden="true" />
                                          <button type="button"
                                                class="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                    </div>
                              </div>

                              <div>
                                    <label for="name" class="block text-sm font-medium text-gray-900">Full Name</label>
                                    <input id="name" name="name" type="text" autocomplete="name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm" />
                              </div>

                              <div>
                                    <label for="email" class="block text-sm font-medium text-gray-900">Email
                                          Address</label>
                                    <input id="email" name="email" type="email" autocomplete="email"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm" />
                              </div>

                              <div>
                                    <label for="role" class="block text-sm font-medium text-gray-900">Role</label>
                                    <select id="role" name="role" autocomplete="role-name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option>Admin</option>
                                          <option>Staff</option>
                                    </select>
                              </div>

                              <div>
                                    <label for="status" class="block text-sm font-medium text-gray-900">Status</label>
                                    <select id="status" name="status" autocomplete="status-name"
                                          class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm">
                                          <option>Please select</option>
                                          <option>Active</option>
                                          <option>Inactive</option>
                                          <option>Suspeded</option>
                                    </select>
                              </div>
                        </div>

                        <div class="mt-6 flex justify-end gap-x-4">
                              <NuxtLink to="/internal/users"
                                    class="inline-flex items-center justify-center text-sm font-semibold text-gray-700 px-4 py-2">
                                    Cancel
                              </NuxtLink>
                              <button type="submit"
                                    class="inline-flex items-center justify-center rounded-md bg-red-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-900">
                                    Create
                              </button>
                        </div>
                  </form>
            </div>
      </div>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid'
definePageMeta({
      layout: 'internal'
})
</script>