<template>
  <div :class="['message', isSender ? 'sender' : 'receiver']">
    <div class="avatar">{{ avatar }}</div>
    <div class="message-content">
      <p v-if="message && message.type === 'text'">{{ message.content }}</p>
      <div v-else-if="message" class="place-card">📍 {{ message.placeName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  message: Object,
});

const isSender = computed(() => props.message && props.message.sender === "User");
const avatar = computed(() => props.message?.sender?.charAt(0).toUpperCase() || "");
</script>

<style scoped>
.message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
}

.sender {
  flex-direction: row-reverse;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.message-content {
  max-width: 60%;
  padding: 10px;
  border-radius: 8px;
  color: #333;
}

.sender .message-content {
  background-color: #e0f7fa;
}

.receiver .message-content {
  background-color: #f0f0f0;
}

.place-card {
  font-weight: bold;
  color: #007bff;
}
</style>
