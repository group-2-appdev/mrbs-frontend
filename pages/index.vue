<template>
  <section class="relative min-h-screen">
        <div class="absolute inset-0 h-128 pt-16 box-content -z-1">
              <img class="absolute inset-0 w-full h-full object-cover opacity-25" src="/images/room.jpg"
                    width="1440" height="577" alt="News" />
              <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
        </div>
        <Popover as="template" v-slot="{ open }">
              <header
                    :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                          <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                                <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                                      <div class="flex flex-shrink-0 items-center">
                                            <NuxtLink href="/">
                                                  <svg class="h-10 w-auto text-red-900"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
                                                        <path fill="currentColor"
                                                              d="M35 55h5v10h-5zM60 55h5v10h-5z" />
                                                  </svg>
                                                </NuxtLink>
                                      </div>
                                </div>
                                <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                                      <div
                                            class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                            <div class="w-full">
                                                  <label for="search" class="sr-only">Search</label>
                                                  <div class="relative">
                                                        <div
                                                              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        </div>
                                                        &nbsp;
                                                  </div>
                                            </div>
                                      </div>
                                </div>
                                <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                                      <!-- Mobile menu button -->
                                      <PopoverButton
                                            class="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span class="absolute -inset-0.5" />
                                            <span class="sr-only">Open menu</span>
                                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                                      </PopoverButton>
                                </div>
                                <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                                      <NuxtLink to="/sign-up"
                                            class="ml-6 inline-flex items-center rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Login</NuxtLink>
                                </div>
                          </div>
                    </div>

                    <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
                          <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                      :aria-current="item.current ? 'page' : undefined"
                                      :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md px-3 py-2 text-base font-medium']">{{
                                            item.name }}</a>
                          </div>
                          <div class="border-t border-gray-200 pb-3 pt-4">
                                <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                                      <div class="flex-shrink-0">
                                            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                                      </div>
                                      <div class="ml-3">
                                            <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                                            <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
                                      </div>
                                      <button type="button"
                                            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span class="absolute -inset-1.5" />
                                            <span class="sr-only">View notifications</span>
                                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                                      </button>
                                </div>
                                <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                                      <a v-for="item in userNavigation" :key="item.name" :href="item.href"
                                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">{{
                                                  item.name }}</a>
                                </div>
                          </div>
                    </PopoverPanel>
              </header>
        </Popover>
        <div class="bg-white py-24 sm:py-32">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-4xl text-center">
                          <p
                                class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                                Meeting Room Board</p>
                    </div>
                    <div
                          class="isolate space-x-3 mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                          <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow min-h-[300px] flex flex-col"
                                v-for="room in rooms" :key="room.id">
                                <NuxtLink to="/view-room">
                                      <div class="px-4 py-5 sm:px-6 bg-red-900 text-white hover:bg-white hover:text-red-900">
                                                  <span class="text-xl font-normal">{{ room.name }}</span>
                                      </div>
                                </NuxtLink>
                                <!-- Body Section with Status and Description, flex-grow added -->
                                <div class="px-4 py-6 sm:p-6 flex-grow flex flex-col justify-between">
                                      <div>
                                            <span :class="{
                                                  'text-green-700 ring-green-600/20 bg-green-50': room.status === 'Available',
                                                  'text-red-700 ring-red-600/20 bg-red-50': room.status === 'Not Available',
                                                  'text-blue-700 ring-blue-600/20 bg-blue-50': room.status === 'On Use',
                                            }"
                                                  class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                                                  {{ room.status }}
                                            </span>
                                      </div>

                                      <!-- Description Section -->
                                      <div class="mt-4 flex-grow">
                                            <p class="text-gray-500 text-sm">
                                                  {{ room.description }}
                                            </p>
                                      </div>
                                </div>

                                <!-- Footer Section with Button aligned at bottom -->
                                <div class="px-4 py-4 sm:px-6">
                                      <span class="inline-flex items-center text-gray-700">
                                            <UsersIcon class="w-4 h-4 mr-2" />
                                            <!-- Adjusted size and added margin -->
                                            {{ room.total_pax }} pax
                                      </span>
                                </div>
                          </div>
                    </div>
              </div>
        </div>
  </section>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { UsersIcon } from '@heroicons/vue/20/solid';

const rooms = [
  {
        name: 'Meeting Room 1',
        id: 1,
        href: '#',
        description: 'A comfortable and well-equipped room for team meetings and client presentations. Ideal for brainstorming sessions, project discussions, and small group collaborations.',
        status: 'Available',
        total_pax: 10,
  },
  {
        name: 'Meeting Room 2',
        id: 2,
        href: '#',
        description: 'A premium meeting space with a formal setup, perfect for executive meetings, strategy sessions, and high-profile presentations. Equipped with advanced audiovisual tools and luxurious seating for a professional atmosphere.',
        status: 'On Use',
        total_pax: 20,
  },
  {
        name: 'Meeting Room 3',
        id: 3,
        href: '#',
        description: 'This room is optimized for remote meetings and presentations, featuring a state-of-the-art video conferencing setup, high-speed internet, and soundproofing to ensure clear communication.',
        status: 'Not Available',
        total_pax: 10,
  },
  {
        name: 'Meeting Room 4',
        id: 4,
        href: '#',
        description: 'A spacious room designed for workshops, training sessions, and group activities. Equipped with multiple screens, presentation tools, and comfortable seating arrangements to facilitate learning and interaction.',
        status: 'Available',
        total_pax: 30,
  },

]

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>