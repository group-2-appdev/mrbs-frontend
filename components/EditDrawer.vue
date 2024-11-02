<template>
      <TransitionRoot as="template" :show="open">
            <Dialog class="relative z-10" @close="navigateDrawer">

                  <!-- Dark Overlay -->
                  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
                  </TransitionChild>

                  <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                    <TransitionChild as="template"
                                          enter="transform transition ease-in-out duration-500 sm:duration-700"
                                          enter-from="translate-x-full" enter-to="translate-x-0"
                                          leave="transform transition ease-in-out duration-500 sm:duration-700"
                                          leave-from="translate-x-0" leave-to="translate-x-full">
                                          <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                                                <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                      <div class="flex-1">
                                                            <!-- Header -->
                                                            <div class="bg-gray-50 px-4 py-6 sm:px-6">
                                                                  <div
                                                                        class="flex items-start justify-between space-x-3">
                                                                        <div class="space-y-1">
                                                                              <DialogTitle
                                                                                    class="text-base font-semibold text-gray-900">
                                                                                    Edit booking
                                                                              </DialogTitle>
                                                                              <p class="text-sm text-gray-500">
                                                                                    Get started by filling
                                                                                    in the information below
                                                                                    to edit existing
                                                                                    booking.</p>
                                                                        </div>
                                                                        <div class="flex h-7 items-center">
                                                                              <button type="button"
                                                                                    class="relative text-gray-400 hover:text-gray-500"
                                                                                    @click="navigateDrawer">
                                                                                    <span class="absolute -inset-2.5" />
                                                                                    <span class="sr-only">Close
                                                                                          panel</span>
                                                                                    <XMarkIcon class="h-6 w-6"
                                                                                          aria-hidden="true" />
                                                                              </button>
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                            <!-- Divider container -->
                                                            <div
                                                                  class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                                                                  <!-- Project name -->
                                                                  <div
                                                                        class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                                        <div>
                                                                              <label for="project-name"
                                                                                    class="block text-sm/6 font-medium text-gray-900 sm:mt-1.5">Meeting
                                                                                    name</label>
                                                                        </div>
                                                                        <div class="sm:col-span-2">
                                                                              <input id="name" name="name" type="text" autocomplete="name" v-model="booking.name"
                                                                              class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm" />
                                                                        </div>
                                                                  </div>

                                                                  <!-- Project description -->
                                                                  <div
                                                                        class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                                        <div>
                                                                              <label for="project-description"
                                                                                    class="block text-sm/6 font-medium text-gray-900 sm:mt-1.5">Description</label>
                                                                        </div>
                                                                        <div class="sm:col-span-2">
                                                                              <textarea id="project-description"
                                                                                    v-model="booking.description"

                                                                                    name="project-description" rows="3"
                                                                                    class="mt-1 w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:ring-red-900 focus:border-red-900 sm:text-sm" />
                                                                        </div>
                                                                  </div>

                                                                  <!-- Team members -->
                                                                  <div
                                                                        class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                                        <div>
                                                                              <h3
                                                                                    class="text-sm/6 font-medium text-gray-900">
                                                                                    Date</h3>
                                                                        </div>
                                                                        <div class="sm:col-span-2">
                                                                              <DatePicker />
                                                                        </div>
                                                                  </div>

                                                                  <div
                                                                        class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                                        <div>
                                                                              <h3
                                                                                    class="text-sm/6 font-medium text-gray-900">
                                                                                    From</h3>
                                                                        </div>
                                                                        <div class="sm:col-span-2">
                                                                              <TimePicker />
                                                                        </div>
                                                                  </div>

                                                                  <div
                                                                        class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                                        <div>
                                                                              <h3
                                                                                    class="text-sm/6 font-medium text-gray-900">
                                                                                    To</h3>
                                                                        </div>
                                                                        <div class="sm:col-span-2">
                                                                              <TimePicker />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <!-- Action buttons -->
                                                      <div
                                                            class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                                            <div class="flex justify-end space-x-3">
                                                                  <button type="button"
                                                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                        @click="navigateDrawer">Cancel</button>
                                                                  <button type="submit"
                                                                        class="inline-flex justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Save</button>
                                                            </div>
                                                      </div>
                                                </form>
                                          </DialogPanel>
                                    </TransitionChild>
                              </div>
                        </div>
                  </div>
            </Dialog>
      </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import DatePicker from '@/components/DatePicker.vue'
import TimePicker from '@/components/TimePicker.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const navigateDrawer = () => {
      open.value = !open.value
}

const open = ref(false)

let booking = reactive({
      name: 'Meeting with Petronas',
      description: 'To discuss a project about blockchain',

})

defineExpose({
      navigateDrawer
})
</script>
