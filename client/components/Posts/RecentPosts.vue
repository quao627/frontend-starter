<template>
  <div class="recent-posts-container">
    <h3>Recent Posts</h3>
    <PostComponent v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import PostComponent from "@/components/Posts/PostComponent.vue";
import { ref } from "vue";

// Example recent posts data
const posts = ref([
  { id: 1, content: "Excited about the upcoming logistics conference!" },
  { id: 2, content: "Looking for collaboration opportunities in supply chain optimization." },
]);

defineProps({
  userId: Number,
});
</script>

<style scoped>
.recent-posts-container {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.recent-posts-container h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
}
</style>
