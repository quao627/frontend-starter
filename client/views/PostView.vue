<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import CreatePostButton from "../components/Posts/CreatePostButton.vue";
import PostListComponent from "../components/Posts/PostListComponent.vue";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main class="post-view-container">
    <header>
      <h1>Posts - Explore</h1>
      <CreatePostButton v-if="isLoggedIn" />
    </header>

    <section>
      <PostListComponent />
    </section>
  </main>
</template>

<style scoped>
.post-view-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 16px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid #ccc;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

section {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
