<template>
<main class="h-full bg-white">
  <div class="flex min-h-screen">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="flex items-center space-x-2">
          <!-- SVG Logo -->
          <svg class="h-10 w-auto text-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <!-- Calendar Shape -->
            <rect width="70" height="70" x="15" y="15" fill="none" stroke="currentColor" stroke-width="5" rx="10" />
            <!-- Binding Rings -->
            <circle cx="30" cy="10" r="5" fill="currentColor" />
            <circle cx="70" cy="10" r="5" fill="currentColor" />
            <!-- Calendar Grid Lines and Table -->
            <path stroke="currentColor" stroke-width="3" d="M25 40h50M25 55h50M25 70h50M40 50h20" />
            <!-- Chairs -->
            <path fill="currentColor" d="M35 55h5v10h-5zM60 55h5v10h-5z" />
          </svg>
          <!-- Text Next to Logo -->
          <span class="text-red-900 font-bold text-lg">Meeting Room Booking System</span>
        </div>

        <!-- Form Header -->
        <div>
            <slot />
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="h-full w-full object-cover" src="/images/room.jpg" alt="Meeting Room">
    </div>
  </div>
  </main>
</template>