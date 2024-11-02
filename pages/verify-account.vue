<template>
      <div>
            <div>
              <div>
                <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">Verify your account</h2>
                <p class="mt-2 text-sm text-gray-500">
                  We have sent a verification code to <span class="font-semibold text-red-900">youremail@gmail.com</span>. Please type it below.
                </p>
              </div>
              
              <div class="mt-10">
                <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label for="verify" class="block text-sm font-medium text-gray-900">Enter verification code</label>
                    <div class="mt-2">
                      <input id="verify" name="verify" type="text" autocomplete="verify" required class="block w-full rounded-md py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-red-900 sm:text-sm">
                    </div>
                  </div>
      
                  <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
                      Verify
                    </button>
                    <span class="mt-2 block text-sm text-gray-500">Did not receive the code? Please check your spam folder or <span class="text-red-900 font-bold hover:text-red-700">Resend a new one</span></span>
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