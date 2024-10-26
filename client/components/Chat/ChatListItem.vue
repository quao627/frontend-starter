<template>
  <div v-if="chat" class="chat-list-item" @click="$emit('openChat', chat.id)">
    <div class="avatar">{{ recipientInitial }}</div>
    <div class="chat-details">
      <h3>{{ chat.recipient }}</h3>
      <p>{{ chat.lastMessage }}</p>
      <small class="last-message-time">{{ chat.lastMessageTime }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  chat: Object,
});

const recipientInitial = computed(() => props.chat?.recipient?.charAt(0).toUpperCase() ?? "");
</script>

<style scoped>
.chat-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-list-item:hover {
  background-color: #f0f0f0;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.chat-details h3 {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.chat-details p {
  font-size: 14px;
  color: #666;
  margin: 4px 0 0;
}

.last-message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  display: block;
}
</style>
