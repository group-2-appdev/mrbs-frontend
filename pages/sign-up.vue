<template>
  <div>
    <div>
      <div>
        <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">Sign up for an account</h2>
        <p class="mt-2 text-sm text-gray-500">
          Already a member?
          <NuxtLink to="/" class="font-semibold text-red-900 hover:text-red-700">Sign in here</NuxtLink>
        </p>
      </div>

      <!-- Sign-in Form -->
      <div class="mt-10">
        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-900">Full Name</label>
            <div class="mt-2">
              <input id="name" name="name" type="text" autocomplete="name" required
                class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-900">Password Confirmation</label>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
            </div>
          </div>

          <div>
            <button type="button" @click="goTo"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
              Sign up
            </button>
          </div>
        </form>
      </div>

      <!-- Divider and Social Sign-in Button -->
      <div class="mt-10">
        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 flex justify-center">
          <a href="#"
            class="w-full max-w-xs flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <!-- Google Icon Paths -->
              <path
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                fill="#EA4335" />
              <path
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                fill="#4285F4" />
              <path
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                fill="#FBBC05" />
              <path
                d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                fill="#34A853" />
            </svg>
            <span class="text-sm font-medium">Google</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'auth'
})

const router = useRouter()
const goTo = () => {
  router.push('/verify-account')
}
</script>