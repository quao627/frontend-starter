<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ChatListItem from "../components/Chat/ChatListItem.vue";

const router = useRouter();

const chats = ref([
  { id: 1, recipient: "Alice", lastMessage: "Hello!", lastMessageTime: "10:30 AM" },
  { id: 2, recipient: "Bob", lastMessage: "Are we meeting tomorrow?", lastMessageTime: "Yesterday" },
  { id: 3, recipient: "Charlie", lastMessage: "Great, see you then!", lastMessageTime: "12:00 PM" },
]);

const openChat = (chatId: number) => {
  router.push(`/chat/${chatId}`).catch((error) => {
    console.error("Failed to navigate to chat:", error);
  });
};
</script>

<template>
  <div class="chats-list-container">
    <h2>Chats</h2>
    <div class="chats-list">
      <ChatListItem v-for="chat in chats" :key="chat.id" :chat="chat" @openChat="openChat" />
    </div>
  </div>
</template>

<style scoped>
.chats-list-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f9f9f9;
  height: 100vh;
  overflow-y: auto;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.chats-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
