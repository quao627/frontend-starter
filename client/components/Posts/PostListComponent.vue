<template>
  <div class="post-list">
    <PostComponent v-for="post in posts" :key="post.id" :post="post" @likePost="likePost" />
  </div>
</template>

<script setup lang="ts">
import PostComponent from "@/components/Posts/PostComponent.vue";
import { ref } from "vue";

const posts = ref([
  { id: 1, author: "User1", content: "Looking for people to join a project", state: "LookingForPeople", likes: 15 },
  { id: 2, author: "User2", content: "Discussion about logistics", state: "GeneralDiscussion", likes: 22 },
  { id: 3, author: "User3", content: "Need help with a research paper", state: "LookingForPeople", likes: 7 },
]);

const likePost = (postId: number) => {
  const post = posts.value.find((post) => post.id === postId);
  if (post) {
    post.likes += 1;
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  background-color: #f0f2f5;
}
</style>
