<template>
      <div class="min-h-full">
            <TransitionRoot as="template" :show="sidebarOpen">
                  <Dialog class="relative z-40 lg:hidden" @close="sidebarOpen = false">
                        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                              enter-from="opacity-0" enter-to="opacity-100"
                              leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                              leave-to="opacity-0">
                              <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </TransitionChild>

                        <div class="fixed inset-0 z-40 flex">
                              <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                    enter-from="-translate-x-full" enter-to="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                    leave-to="-translate-x-full">
                                    <DialogPanel
                                          class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
                                          <TransitionChild as="template" enter="ease-in-out duration-300"
                                                enter-from="opacity-0" enter-to="opacity-100"
                                                leave="ease-in-out duration-300" leave-from="opacity-100"
                                                leave-to="opacity-0">
                                                <div class="absolute right-0 top-0 -mr-12 pt-2">
                                                      <button type="button"
                                                            class="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                            @click="sidebarOpen = false">
                                                            <span class="absolute -inset-0.5" />
                                                            <span class="sr-only">Close sidebar</span>
                                                            <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                                      </button>
                                                </div>
                                          </TransitionChild>
                                          <div class="flex flex-shrink-0 items-center px-4">
                                                <NuxtLink to="/internal/home">
                                                      <svg class="h-10 w-auto text-red-900" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100">
                                                            <!-- Calendar Shape -->
                                                            <rect width="70" height="70" x="15" y="15" fill="none"
                                                                  stroke="currentColor" stroke-width="5" rx="10" />
                                                            <!-- Binding Rings -->
                                                            <circle cx="30" cy="10" r="5" fill="currentColor" />
                                                            <circle cx="70" cy="10" r="5" fill="currentColor" />
                                                            <!-- Calendar Grid Lines and Table -->
                                                            <path stroke="currentColor" stroke-width="3"
                                                                  d="M25 40h50M25 55h50M25 70h50M40 50h20" />
                                                            <!-- Chairs -->
                                                            <path fill="currentColor" d="M35 55h5v10h-5zM60 55h5v10h-5z" />
                                                      </svg>
                                                </NuxtLink>
                                          </div>
                                          <div class="mt-5 h-0 flex-1 overflow-y-auto">
                                                <nav class="px-2">
                                                      <div class="space-y-1">
                                                            <NuxtLink v-for="item in navigation" :key="item.name"
                                                                  :to="item.href"
                                                                  :class="[$route.path.startsWith(item.href) ? 'bg-red-900 text-white' : 'text-gray-600 hover:bg-red-900 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-base font-medium']"
                                                                  :aria-current="$route.path.startsWith(item.href) ? 'page' : undefined">
                                                                  <component :is="item.icon"
                                                                        :class="[$route.path.startsWith(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-3 h-6 w-6 flex-shrink-0']"
                                                                        aria-hidden="true" />
                                                                  {{ item.name }}
                                                            </NuxtLink>
                                                      </div>
                                                </nav>
                                          </div>
                                    </DialogPanel>
                              </TransitionChild>
                              <div class="w-14 flex-shrink-0" aria-hidden="true">
                                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                              </div>
                        </div>
                  </Dialog>
            </TransitionRoot>

            <!-- Static sidebar for desktop -->
            <div
                  class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pb-4 lg:pt-5">
                  <div class="flex flex-shrink-0 items-center px-6">
                        <NuxtLink to="/internal/home">
                              <svg class="h-10 w-auto text-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <!-- Calendar Shape -->
                                    <rect width="70" height="70" x="15" y="15" fill="none" stroke="currentColor"
                                          stroke-width="5" rx="10" />
                                    <!-- Binding Rings -->
                                    <circle cx="30" cy="10" r="5" fill="currentColor" />
                                    <circle cx="70" cy="10" r="5" fill="currentColor" />
                                    <!-- Calendar Grid Lines and Table -->
                                    <path stroke="currentColor" stroke-width="3" d="M25 40h50M25 55h50M25 70h50M40 50h20" />
                                    <!-- Chairs -->
                                    <path fill="currentColor" d="M35 55h5v10h-5zM60 55h5v10h-5z" />
                              </svg>
                        </NuxtLink>
                  </div>
                  <!-- Sidebar component, swap this element with another sidebar if you like -->
                  <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
                        <!-- User account dropdown -->
                        <Menu as="div" class="relative inline-block px-3 text-left">
                              <div>
                                    <MenuButton
                                          class="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-gray-100">
                                          <span class="flex w-full items-center justify-between">
                                                <span class="flex min-w-0 items-center justify-between space-x-3">
                                                      <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                                            src="/images/employee/roslan.jpg" alt="" />
                                                      <span class="flex min-w-0 flex-1 flex-col">
                                                            <span
                                                                  class="truncate text-sm font-medium text-gray-900">Admin</span>
                                                            <span
                                                                  class="truncate text-sm text-gray-500">admin@company.com</span>
                                                      </span>
                                                </span>
                                                <ChevronUpDownIcon
                                                      class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                      aria-hidden="true" />
                                          </span>
                                    </MenuButton>
                              </div>
                              <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                          class="absolute left-0 right-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                          <div class="py-1">
                                                <MenuItem v-slot="{ active }">
                                                <NuxtLink to="/internal/profile"
                                                      :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">View
                                                      profile</NuxtLink>
                                                </MenuItem>
                                          </div>
                                          <div class="py-1">
                                                <MenuItem v-slot="{ active }">
                                                <NuxtLink to="/"
                                                      :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                                      Logout
                                                </NuxtLink>
                                                </MenuItem>
                                          </div>
                                    </MenuItems>
                              </transition>
                        </Menu>
                        <!-- Navigation -->
                        <nav class="mt-6 px-3">
                              <div class="space-y-1">
                                    <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                                          :class="[$route.path.startsWith(item.href) ? 'bg-red-900 text-white' : 'text-gray-600 hover:bg-red-900 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']"
                                          :aria-current="$route.path.startsWith(item.href) ? 'page' : undefined">
                                          <component :is="item.icon"
                                                :class="[$route.path.startsWith(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-white', 'mr-3 h-6 w-6 flex-shrink-0']"
                                                aria-hidden="true" />
                                          {{ item.name }}
                                    </NuxtLink>
                              </div>
                        </nav>
                  </div>
            </div>
            <!-- Main column -->
            <div class="flex flex-col lg:pl-64">
                  <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
                        <button type="button"
                              class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-900 lg:hidden"
                              @click="sidebarOpen = true">
                              <span class="sr-only">Open sidebar</span>
                              <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div class="flex flex-1 justify-end px-4 sm:px-6 lg:px-8">
                              <div class="flex items-center">
                                    <!-- Profile dropdown -->
                                    <Menu as="div" class="relative ml-3">
                                          <div>
                                                <MenuButton
                                                      class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2">
                                                      <span class="absolute -inset-1.5" />
                                                      <span class="sr-only">Open user menu</span>
                                                      <img class="h-8 w-8 rounded-full"
                                                            src="/images/employee/roslan.jpg" alt="" />
                                                </MenuButton>
                                          </div>
                                          <transition enter-active-class="transition ease-out duration-100"
                                                enter-from-class="transform opacity-0 scale-95"
                                                enter-to-class="transform opacity-100 scale-100"
                                                leave-active-class="transition ease-in duration-75"
                                                leave-from-class="transform opacity-100 scale-100"
                                                leave-to-class="transform opacity-0 scale-95">
                                                <MenuItems
                                                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                      <div class="py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <NuxtLink to="/internal/profile"
                                                                  :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">View
                                                                  profile</NuxtLink>
                                                            </MenuItem>
                                                      </div>
                                                      <div class="py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <NuxtLink to="/"
                                                                  :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                                                  Logout
                                                            </NuxtLink>
                                                            </MenuItem>
                                                      </div>
                                                </MenuItems>
                                          </transition>
                                    </Menu>
                              </div>
                        </div>
                  </div>
                  <main class="flex-1">
                        <slot />
                  </main>
            </div>
      </div>
</template>

<script setup>
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { Bars3CenterLeftIcon, HomeIcon, XMarkIcon, UsersIcon, CubeIcon, Cog8ToothIcon } from '@heroicons/vue/24/outline';
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid';

const navigation = [
      { name: 'Home', href: '/internal/home', icon: HomeIcon },
      { name: 'Users', href: '/internal/users', icon: UsersIcon },
      { name: 'Rooms', href: '/internal/rooms', icon: CubeIcon },
      { name: 'Settings', href: '/internal/settings', icon: Cog8ToothIcon },
];

const sidebarOpen = ref(false);
</script>