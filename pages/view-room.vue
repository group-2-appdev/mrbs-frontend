<template>
      <div>
            <div class="mx-auto max-w-4xl text-center">
                  <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
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
                              <p class="mt-4 text-lg/6 text-gray-400" :class="{ 'text-red-900': tier.live }">{{
                                    tier.description }}</p>
                              <div class="mt-4">
                                    <span class="text-sm text-gray-400" :class="{ 'text-red-900': tier.live }"><span
                                                class="font-bold">Objective:</span> {{
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
                                          <span class="font-bold">Time:</span>&nbsp;&nbsp;{{ tier.period.from }} - {{
                                          tier.period.to }}
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
</template>

<script setup>
definePageMeta({
      layout: 'portal'
})

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