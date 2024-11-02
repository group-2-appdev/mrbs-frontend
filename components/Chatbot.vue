<template>
      <div class="fixed bottom-4 right-4 flex flex-col items-end">
            <!-- Chat button -->
            <button @click="toggleChat"
                  class="flex items-center justify-center rounded-full bg-red-900 text-white p-3 shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-900">
                  <ChatBubbleLeftEllipsisIcon class="w-5 h-5 mr-2"/>

                  Ask us to help!
            </button>

            <!-- Chat box -->
            <div v-if="isChatOpen" class="mt-3 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-3">
                  <div class="flex justify-between items-center">
                        <h2 class="text-gray-900 font-semibold text-lg">Chatbot</h2>
                        <button @click="toggleChat" class="text-gray-500 hover:text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12" />
                              </svg>
                        </button>
                  </div>

                  <!-- Chat messages area -->
                  <div class="h-40 overflow-y-auto space-y-2">
                        <!-- Messages will go here -->
                        <p class="text-sm text-gray-600 bg-gray-100 p-2 rounded-md">Hello! How can I help you?</p>
                  </div>

                  <!-- Input area -->
                  <div class="flex items-center space-x-2">
                        <input v-model="userMessage" type="text" placeholder="Type a message..."
                              class="w-full border border-gray-300 rounded-md p-2 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none" />
                        <button @click="sendMessage"
                              class="flex-shrink-0 bg-red-900 text-white p-2 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-900">
                              Send
                        </button>
                  </div>
            </div>
      </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
const isChatOpen = ref(false);
const userMessage = ref('');

function toggleChat() {
      isChatOpen.value = !isChatOpen.value;
}

function sendMessage() {
      if (userMessage.value.trim()) {
            // Add user message to chat and clear input
            console.log(userMessage.value); // This is where you would handle the message
            userMessage.value = '';
      }
}
</script>