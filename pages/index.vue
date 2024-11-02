<template>
  <div>
    <div class="mx-auto max-w-4xl text-center">
      <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
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
            }" class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
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

</template>

<script setup>
import { UsersIcon } from '@heroicons/vue/20/solid';

definePageMeta({
  layout: 'portal'
})

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