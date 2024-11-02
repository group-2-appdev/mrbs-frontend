<template>
      <div>
            <div>
              <div>
                <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Already remember your password?
                  <NuxtLink to="/sign-in" class="font-semibold text-red-900 hover:text-red-700">Sign in here</NuxtLink>
                </p>
              </div>
              
              <div>
                  <p class="mt-10 text-sm text-gray-500">
                        Enter your email address to reset your password. We will send a reset password link if your email existed.
                  </p>
              </div>
              <!-- Sign-in Form -->
              <div class="mt-5">
                <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
                    <div class="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
                    </div>
                  </div>
      
                  <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
                      Send Link
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