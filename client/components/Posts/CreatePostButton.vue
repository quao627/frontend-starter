<template>
  <button class="create-post-btn" @click="openPostForm">Create New Post <i class="fas fa-pencil-alt"></i></button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const openPostForm = async () => {
  try {
    await router.push("/create-post");
  } catch (error) {
    console.error("Failed to navigate to create post:", error);
  }
};
</script>

<style scoped>
.create-post-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.create-post-btn i {
  margin-left: 8px;
}

.create-post-btn:hover {
  background-color: #0056b3;
}
</style>
