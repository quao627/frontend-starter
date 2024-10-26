<template>
  <div class="chat-input">
    <input v-model="message" type="text" placeholder="Type anything" @keyup.enter="handleSend" />
    <button @click="handleSend">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref("");

const emit = defineEmits(["sendMessage"]);

const handleSend = () => {
  if (message.value.trim()) {
    emit("sendMessage", { id: Date.now(), sender: "User", content: message.value, type: "text" });
    message.value = "";
  }
};
</script>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  gap: 8px;
}

input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
