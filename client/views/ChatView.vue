<script setup lang="ts">
import ChatInput from "@/components/Chat/ChatInput.vue";
import MessageComponent from "@/components/Chat/MessageComponent.vue";
import PlacePicker from "@/components/Chat/PlacePicker.vue";
import { nextTick, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const chatId = route.params.id;

const messages = ref([
  { id: 1, sender: "Alice", content: "Hello!", type: "text" },
  { id: 2, sender: "User", content: "Hey there!", type: "text" },
  { id: 3, sender: "User", content: "Let’s meet at Central Park.", type: "place", placeName: "Central Park" },
]);

const showPlacePicker = ref(false);
const chatMessagesContainer = ref(null);

// Function to go back to the previous page
const goBack = () => {
  router.back();
};

// Function to send a new message
const sendMessage = (message) => {
  messages.value.push(message);
  scrollToBottom();
};

// Function to send a place
const sendPlace = (place) => {
  messages.value.push({ id: Date.now(), sender: "User", content: place, type: "place", placeName: place });
  showPlacePicker.value = false;
  scrollToBottom();
};

// Scroll to the latest message
const scrollToBottom = () => {
  nextTick(() => {
    if (chatMessagesContainer.value) {
      chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight;
    }
  });
};

// Automatically scroll to the bottom on component mount
onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="chat-view-container">
    <!-- Back Button -->
    <button class="back-button" @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>

    <!-- Chat Messages -->
    <div class="chat-messages" ref="chatMessagesContainer">
      <MessageComponent v-for="message in messages" :key="message.id" :message="message" />
    </div>

    <!-- Chat Input & Place Picker -->
    <div class="chat-input-container">
      <button class="place-button" @click="showPlacePicker = true">+</button>
      <ChatInput @sendMessage="sendMessage" />
    </div>

    <PlacePicker v-if="showPlacePicker" @selectPlace="sendPlace" @close="showPlacePicker = false" />
  </div>
</template>

<style scoped>
.chat-view-container {
  display: flex;
  flex-direction: column;
  height: 85vh;
  background-color: #f9f9f9;
  padding: 16px;
}

.back-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-top: 1px solid #ddd;
}

.place-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
}
</style>
