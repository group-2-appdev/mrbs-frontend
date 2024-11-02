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
                                                <NuxtLink to="/">
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
                                                class="ml-6 inline-flex items-center rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Login
                                    </NuxtLink>
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
                                    Meeting Room 2</p>
                        </div>
                        <div
                              class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                              <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                                    :class="[tier.live ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
                                    <div>
                                          <div class="flex items-center justify-between gap-x-4">
                                                <h3 :id="tier.id"
                                                      :class="[tier.live ? 'text-red-900' : 'text-gray-400', 'text-lg/8 font-semibold']">
                                                      {{ tier.name }}</h3>
                                          </div>
                                          <p class="mt-4 text-lg/6 text-gray-400"
                                                :class="{ 'text-red-900': tier.live }">{{ tier.description }}</p>
                                          <div class="mt-4">
                                                <span class="text-sm text-gray-400"
                                                      :class="{ 'text-red-900': tier.live }"><span class="font-bold">Objective:</span> {{
                                                      tier.objective }}</span>
                                          </div>
                                          <div class="mt-4">
                                                <span class="inline-flex items-center text-sm text-gray-400"
                                                      :class="{ 'text-red-900': tier.live }">
                                                      <span class="font-bold">Date:</span>&nbsp;&nbsp;{{ tier.period.date }}
                                                </span>
                                          </div>
                                          <div class="mt-4">
                                                <span class="inline-flex items-center text-sm text-gray-400"
                                                      :class="{ 'text-red-900': tier.live }">
                                                      <span class="font-bold">Time:</span>&nbsp;&nbsp;{{ tier.period.from }} - {{ tier.period.to }}
                                                </span>
                                          </div>
                                          <div class="mt-4">
                                                <span class="inline-flex items-center text-sm text-gray-400"
                                                      :class="{ 'text-red-900': tier.live }">
                                                      <span class="font-bold">Booked By:</span>&nbsp;&nbsp;
                                                       <img :class="['h-6 w-6 max-w-none rounded-full ring-2 ring-white ml-2', { 'opacity-50': !tier.live }]"
                                                            :src="tier.booked_by.image" :alt="tier.booked_by.name" />
                                                      <span class="ml-2">{{ tier.booked_by.name }}</span>
                                                </span>
                                          </div>
                                    </div>
                                    <div v-if="tier.live">
                                          <span :class="[tier.live ? 'text-red-900' : 'text-gray-900', 'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold']"
                                                :aria-describedby="tier.id">
                                                <span class="inline-flex items-center">
                                                      <!-- Live text -->
                                                      On Use
                                                      <!-- Pulsing dot positioned next to text -->
                                                      <span class="relative flex h-3 w-3 ml-2">
                                                            <span
                                                                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                            <span
                                                                  class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                      </span>
                                                </span>
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
      {
            name: 'Session 9',
            id: 'tier-freelancer',
            href: '#',
            booked_by: {
                  name: 'Mohammad Hafizzudin',
                  image: '/images/employee/din.jpg'
            },
            period: {
                  date: '03 Nov 2024',
                  from: '02:00pm',
                  to: '03:00pm'
            },
            priceMonthly: '$19',
            description: 'Meeting with Petronas',
            objective: 'An innovative video conferencing project that uses 3D technology and advanced imaging to create lifelike remote interactions, making participants feel as though they’re in the same room.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            live: false,
      },
      {
            name: 'Session 10',
            id: 'tier-startup',
            href: '#',
            booked_by: {
                  name: 'Fatin Nur Syafiqah',
                  image: '/images/employee/fatin.jpg'
            },
            period: {
                  date: '03 Nov 2024',
                  from: '04:00pm',
                  to: '05:00pm'
            },
            objective: 'Development of an augmented reality (AR) headset that aims to revolutionize virtual experiences by integrating Apple’s ecosystem with AR technology for immersive applications in gaming, productivity, and media.',
            priceMonthly: '$49',
            description: 'Meeting with Sime Darby',
            features: [
                  '25 products',
                  'Up to 10,000 subscribers',
                  'Advanced analytics',
                  '24-hour support response time',
                  'Marketing automations',
            ],
            live: true,
      },
      {
            name: 'Session 11',
            id: 'tier-enterprise',
            href: '#',
            booked_by: {
                  name: 'Roslan Saidi',
                  image: '/images/employee/roslan.jpg'
            },
            period: {
                  date: '04 Nov 2024',
                  from: '08:00am',
                  to: '10:00am'
            },
            priceMonthly: '$99',
            description: 'Meeting with JAKIM',
            objective: 'A mixed reality platform that enables people in different locations to collaborate in a shared holographic space. It combines augmented reality, virtual reality, and cloud computing to facilitate remote teamwork and communication.',
            features: [
                  'Unlimited products',
                  'Unlimited subscribers',
                  'Advanced analytics',
                  '1-hour, dedicated support response time',
                  'Marketing automations',
            ],
            live: false,
      },
]

import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

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