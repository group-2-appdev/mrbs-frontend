<template>
      <div>
            <div>
              <div>
                <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">Reset Password</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Reset your password
                </p>
              </div>
              <!-- Sign-in Form -->
              <div class="mt-5">
                <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-900">New Password</label>
                    <div class="mt-2">
                      <input id="password" name="password" type="password" autocomplete="password" required class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
                    </div>
                  </div>
      
                  <div>
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-900">New Password Confirmation</label>
                    <div class="mt-2">
                      <input id="password_confirmation" name="password" type="password_confirmation" autocomplete="password_confirmation" required class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
              </div>
      </div>
      </template>
      <script setup>
      definePageMeta({
            layout: 'auth'
      })
      </script>